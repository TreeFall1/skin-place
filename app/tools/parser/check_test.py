# import requests
# from bs4 import BeautifulSoup
#
# API_KEY = "1EECF5493FFFE01940A7CA68B297E0D0"
#
#
# def get_inventory(steam_id):
#     """Получение инвентаря пользователя Steam"""
#     url = f"https://steamcommunity.com/inventory/{steam_id}/730/2?l=english&count=5000"
#     response = requests.get(url)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         print("Ошибка при получении инвентаря.")
#         return None
#
#
# def get_last_sale_price(market_hash_name):
#     """Получение последней цены продажи через парсинг страницы предмета"""
#     market_url = f"https://steamcommunity.com/market/listings/730/{market_hash_name.replace(' ', '%20')}"
#     print(market_url)
#     headers = {"User-Agent": "Mozilla/5.0"}
#     response = requests.get(market_url, headers=headers)
#
#     if response.status_code == 200:
#         soup = BeautifulSoup(response.text, "html.parser")
#
#         # Найти блок с последними продажами
#         activity_block = soup.find("div", id="market_commodity_buyrequests")
#         if activity_block:
#             sale_price = activity_block.find("span", class_="market_commodity_orders_header_promote")
#             if sale_price:
#                 return sale_price.text.strip()
#
#         # Если не удалось найти цену, выведем HTML для диагностики
#         # print("Не удалось найти цену. HTML страницы:")
#         # print(soup.prettify())
#
#     return "Не удалось получить цену"
#
#
# def parse_inventory(steam_id):
#     """Парсинг инвентаря и вывод информации о предметах"""
#     inventory = get_inventory(steam_id)
#     if not inventory:
#         return
#
#     descriptions = {item["classid"]: item for item in inventory.get("descriptions", [])}
#     assets = inventory.get("assets", [])
#
#     for asset in assets:
#         classid = asset["classid"]
#         item_data = descriptions.get(classid, {})
#         market_hash_name = item_data.get("market_hash_name")
#         image_url = f"https://steamcommunity.com/economy/image/{item_data.get('icon_url', '')}"
#
#         if market_hash_name:
#             last_sale_price = get_last_sale_price(market_hash_name);
#             print(item_data.get('tags'))
#             print(f"Название: {market_hash_name}")
#             print(f"Последняя цена продажи: {last_sale_price}")
#             print(f"Картинка: {image_url}\n")
#         else:
#             print("Информация о предмете отсутствует.\n")
#
#
# # Пример использования
# steam_id = "76561198088121745"
# parse_inventory(steam_id)
import requests
from bs4 import BeautifulSoup
import time

API_KEY = "1EECF5493FFFE01940A7CA68B297E0D0"

def get_inventory(steam_id):
    """Получение инвентаря пользователя Steam"""
    url = f"https://steamcommunity.com/inventory/{steam_id}/730/2?l=english&count=5000"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print("Ошибка при получении инвентаря.")
        return None

def get_last_sale_price(market_hash_name):
    """Получение последней цены продажи через парсинг страницы предмета"""
    market_url = f"https://steamcommunity.com/market/listings/730/{market_hash_name.replace(' ', '%20')}"
    print(market_url)
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }
    response = requests.get(market_url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")

        # Попробуем найти цену в другом месте
        price_block = soup.find("div", class_="market_listing_right_cell market_listing_their_price")
        if price_block:
            sale_price = price_block.find("span", class_="market_table_value")
            if sale_price:
                # print('PRICE:', sale_price.text.split()[1])
                # return sale_price.text.strip()
                return sale_price.text.strip().split('\t')
        # Если не удалось найти цену, выведем HTML для диагностики
        # print("Не удалось найти цену. HTML страницы:")
        # print(soup.prettify())

    return "Не удалось получить цену"

# def get_last_sale_price(market_hash_name):
#     """Получение последней цены продажи через парсинг страницы предмета"""
#     market_url = f"https://steamcommunity.com/market/listings/730/{market_hash_name.replace(' ', '%20')}"
#     print(market_url)
#     headers = {
#         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
#     }
#     response = requests.get(market_url, headers=headers)
#
#     if response.status_code == 200:
#         soup = BeautifulSoup(response.text, "html.parser")
#
#         # Ищем блок с последней ценой продажи
#         price_block = soup.find("span", class_="market_commodity_orders_header_promote")
#         if price_block:
#             return price_block.text.strip()
#
#         # Если не удалось найти цену, выведем HTML для диагностики
#         # print("Не удалось найти цену. HTML страницы:")
#         # print(soup.prettify())
#
#     return "Не удалось получить цену"

def parse_inventory(steam_id):
    """Парсинг инвентаря и вывод информации о предметах"""
    inventory = get_inventory(steam_id)
    if not inventory:
        return

    descriptions = {item["classid"]: item for item in inventory.get("descriptions", [])}
    assets = inventory.get("assets", [])

    for asset in assets:
        classid = asset["classid"]
        item_data = descriptions.get(classid, {})
        market_hash_name = item_data.get("market_hash_name")
        image_url = f"https://steamcommunity.com/economy/image/{item_data.get('icon_url', '')}"

        if market_hash_name:
            last_sale_price = get_last_sale_price(market_hash_name)
            # print(item_data.get('tags'))
            print(f"Название: {market_hash_name}")
            print(f"Последняя цена продажи: {last_sale_price}")
            print(f"Картинка: {image_url}\n")
        else:
            print("Информация о предмете отсутствует.\n")

        # Добавляем задержку между запросами
        # time.sleep(1)

# Пример использования
steam_id = "76561198088121745"
parse_inventory(steam_id)