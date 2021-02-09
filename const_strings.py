import os

FEEDBACK_CHAT_ID = "381079123"
PORT = int(os.environ.get('PORT', 5000))
SQL = """INSERT INTO idea(text) VALUES(%s)"""
TOKEN = '1536160180:AAFHMDqH73p_2O9zKVhfRfsXpI0wPm6188Q'
HTTPS = 'https://newideasby.herokuapp.com/'
HOST = "ec2-108-128-104-50.eu-west-1.compute.amazonaws.com"
DATABASE = "d3ntrg32ts3crt"
USER = "xdctzeagdkimcx"
PASSWORD = "c0d0f10af669df81ec02e19fd144f0254bd0f06ab1c0a32a166ecb8901328159"

START_STRING = 'Вас вітае онлайн-платформа "Нашы iдэi". Гэты бот збірае ідэі для новай Беларусі 🤍❤️🤍. Каб падзяліцца сваёй ідэяй, абярыце пункт /new'
ANY_STRING = 'Каб падзяліцца сваёй ідэяй, абярыце пункт /new'
NEW_IDEA_INSTRUCTION = 'Падрабязна апішыце сваю ідэю, праблему або рашэнне гэтай праблемы'
IDEA_SUCCESS = 'Ваша ідэя запісана!'
IDEA_FAIL = 'Нешта пайшло не так.'