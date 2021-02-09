import logging

import psycopg2

from const_strings import *
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters

global bot, conn

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)
users = {}


def start(update, context):
    update.message.reply_text(START_STRING)


def new(update, context):
    update.message.reply_text(NEW_IDEA_INSTRUCTION)
    users[update.message.chat.id] = True


def get_idea(update, context):
    if users[update.message.chat.id]:
        bot.send_message(FEEDBACK_CHAT_ID, update.message.text)
        update.message.reply_text(update.message.text)

        global conn
        cur = conn.cursor()
        cur.execute(SQL, (update.message.text, ))
        conn.commit()
        cur.close()
        conn.close()

        users[update.message.chat.id] = False
    else:
        update.message.reply_text(ANY_STRING)


def error(update, context):
    logger.warning('Update "%s" caused error "%s"', update, context.error)


def main():
    updater = Updater(TOKEN, use_context=True)

    dp = updater.dispatcher

    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(CommandHandler("new", new))

    dp.add_handler(MessageHandler(Filters.text, get_idea))

    dp.add_error_handler(error)
    global bot
    bot = updater.bot
    updater.start_webhook(listen="0.0.0.0",
                          port=int(PORT),
                          url_path=TOKEN)
    updater.bot.setWebhook(HTTPS + TOKEN)

    global conn
    conn = psycopg2.connect(
        host = HOST,
        database = DATABASE,
        user = USER,
        password = PASSWORD)

    updater.idle()


if __name__ == '__main__':
    main()
