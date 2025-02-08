# TODO: Mid Stable, Fast
import time
import requests
import json
import sys

def get_inventory(steam_id):
    """Получение инвентаря пользователя Steam"""
    url = f"https://steamcommunity.com/inventory/{steam_id}/730/2?l=english&count=5000"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    return None

def get_market_price(market_hash_name):
    """Получение цены предмета через Steam API"""
    url = "https://steamcommunity.com/market/priceoverview/"
    params = {
        "appid": 730,  # CS:GO
        "currency": 1,  # USD
        "market_hash_name": market_hash_name,
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        if data.get("success"):
            return data.get("lowest_price", "Overstock")
    return "Overstock"

def get_item_rarity_color(tags):
    """Получение цвета редкости предмета"""
    rarity_colors = {
        "Consumer Grade": "B2B2B2",
        "Industrial Grade": "5E98D9",
        "Mil-Spec Grade": "4B69FF",
        "Restricted": "8847FF",
        "Classified": "D32CE6",
        "Covert": "EB4B4B",
        "Contraband": "E4AE39",
    }

    for tag in tags:
        if tag.get("category") == "Rarity":
            rarity_color = tag.get("color", "Unknown rarity")
            return rarity_color
    return "Unknown color"

def get_item_condition(tags):
    """Получение состояния предмета"""
    condition_abbreviations = {
        "Factory New": "FN",
        "Minimal Wear": "MW",
        "Field-Tested": "FT",
        "Well-Worn": "WW",
        "Battle-Scarred": "BS",
    }

    for tag in tags:
        if tag.get("category") == "Exterior":
            condition_name = tag.get("localized_tag_name", "Unknown exterior")
            return condition_abbreviations.get(condition_name, "N/A")
    return "N/A"

def parse_inventory(steam_id):
    """Парсинг инвентаря и формирование JSON"""
    inventory = get_inventory(steam_id)
    if not inventory:
        return json.dumps({"error": "Cant get the inventory"})

    descriptions = {item["classid"]: item for item in inventory.get("descriptions", [])}
    assets = inventory.get("assets", [])

    inventory_data = []

    for asset in assets:
        classid = asset["classid"]
        item_data = descriptions.get(classid, {})
        market_hash_name = item_data.get("market_hash_name")
        image_url = f"https://steamcommunity.com/economy/image/{item_data.get('icon_url', '')}"
        tags = item_data.get("tags", [])

        if market_hash_name:
            market_price = get_market_price(market_hash_name)
            rarity_color = get_item_rarity_color(tags)
            condition_abbr = get_item_condition(tags)

            response = {
                'title': market_hash_name,
                'price': market_price,
                'color': f"#{rarity_color}",
                'condition': condition_abbr,
                'image': image_url
            }
            inventory_data.append(response)
            time.sleep(0.5)

    return json.dumps(inventory_data)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "Steam ID wasn't received"}))
    else:
        steam_id = sys.argv[1]
        print(parse_inventory(steam_id))

#TODO: STABLE, BUT SLOW

# import time
# import requests
# import json
# import sys
#
# MAX_RETRIES = 3  # Количество повторных попыток при ошибках
#
# HEADERS = {
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
# }
#
# def get_inventory(steam_id):
#     """Получение инвентаря пользователя Steam с повторными попытками"""
#     url = f"https://steamcommunity.com/inventory/{steam_id}/730/2?l=english&count=5000"
#
#     for _ in range(MAX_RETRIES):
#         response = requests.get(url, headers=HEADERS)
#         if response.status_code == 200:
#             return response.json()
#         time.sleep(2)  # Ждем перед повторной попыткой
#
#     return None
#
# def get_market_price(market_hash_name):
#     """Получение цены предмета с повторными попытками"""
#     url = "https://steamcommunity.com/market/priceoverview/"
#     params = {"appid": 730, "currency": 1, "market_hash_name": market_hash_name}
#
#     for _ in range(MAX_RETRIES):
#         response = requests.get(url, headers=HEADERS, params=params)
#         if response.status_code == 200:
#             data = response.json()
#             if data.get("success"):
#                 return data.get("lowest_price", "Overstock")
#         time.sleep(2)  # Ждем перед повторной попыткой
#
#     return "Overstock"
#
# def get_item_rarity_color(tags):
#     """Получение цвета редкости предмета"""
#     rarity_colors = {
#         "Consumer Grade": "B2B2B2",
#         "Industrial Grade": "5E98D9",
#         "Mil-Spec Grade": "4B69FF",
#         "Restricted": "8847FF",
#         "Classified": "D32CE6",
#         "Covert": "EB4B4B",
#         "Contraband": "E4AE39",
#     }
#
#     for tag in tags:
#         if tag.get("category") == "Rarity":
#             return tag.get("color", "Unknown color")
#     return "Unknown color"
#
# def get_item_condition(tags):
#     """Получение состояния предмета"""
#     condition_abbreviations = {
#         "Factory New": "FN",
#         "Minimal Wear": "MW",
#         "Field-Tested": "FT",
#         "Well-Worn": "WW",
#         "Battle-Scarred": "BS",
#     }
#
#     for tag in tags:
#         if tag.get("category") == "Exterior":
#             return condition_abbreviations.get(tag.get("localized_tag_name", "N/A"), "N/A")
#     return "N/A"
#
# def parse_inventory(steam_id):
#     """Парсинг инвентаря и формирование JSON"""
#     inventory = get_inventory(steam_id)
#     if not inventory:
#         return json.dumps({"error": "Can't get the inventory"})
#
#     descriptions = {item["classid"]: item for item in inventory.get("descriptions", [])}
#     assets = inventory.get("assets", [])
#
#     inventory_data = []
#     request_count = 0
#
#     for asset in assets:
#         if request_count >= 50:  # Ограничение на 50 запросов к Steam API
#             break
#
#         classid = asset["classid"]
#         item_data = descriptions.get(classid, {})
#         market_hash_name = item_data.get("market_hash_name")
#         image_url = f"https://steamcommunity.com/economy/image/{item_data.get('icon_url', '')}"
#         tags = item_data.get("tags", [])
#
#         if market_hash_name:
#             market_price = get_market_price(market_hash_name)
#             rarity_color = get_item_rarity_color(tags)
#             condition_abbr = get_item_condition(tags)
#
#             response = {
#                 'title': market_hash_name,
#                 'price': market_price,
#                 'color': f"#{rarity_color}",
#                 'condition': condition_abbr,
#                 'image': image_url
#             }
#             inventory_data.append(response)
#
#             request_count += 1  # Увеличиваем счетчик запросов
#
#     return json.dumps(inventory_data)
#
# if __name__ == "__main__":
#     if len(sys.argv) < 2:
#         print(json.dumps({"error": "Steam ID wasn't received"}))
#     else:
#         steam_id = sys.argv[1]
#         print(parse_inventory(steam_id))

# TODO: NEW
# import time
# import requests
# import json
# import sys
# import random
#
# PROXY_LIST_URL = "https://www.proxyscrape.com/api?request=displayproxies&proxytype=http&timeout=1000&country=all"
# MAX_RETRIES = 5
#
# def get_proxies():
#     """Получаем список бесплатных прокси"""
#     try:
#         response = requests.get(PROXY_LIST_URL, timeout=5)
#         if response.status_code == 200:
#             proxies = response.text.strip().split("\n")
#             return [{"http": f"http://{proxy}", "https": f"http://{proxy}"} for proxy in proxies]
#     except Exception as e:
#         print(f"Ошибка получения прокси: {e}")
#     return []
#
# def fetch_url(url, params=None, proxies=None):
#     """Делаем запрос с ротацией прокси"""
#     for _ in range(MAX_RETRIES):
#         proxy = random.choice(proxies) if proxies else None
#         try:
#             response = requests.get(url, params=params, proxies=proxy, timeout=5)
#             if response.status_code == 200:
#                 return response.json()
#         except Exception:
#             pass  # Если прокси не работает, пробуем следующий
#     return None
#
# def get_inventory(steam_id, proxies):
#     """Получение инвентаря пользователя Steam"""
#     url = f"https://steamcommunity.com/inventory/{steam_id}/730/2?l=english&count=5000"
#     return fetch_url(url, proxies=proxies)
#
# def get_market_price(market_hash_name, proxies):
#     """Получение цены предмета через Steam API"""
#     url = "https://steamcommunity.com/market/priceoverview/"
#     params = {"appid": 730, "currency": 1, "market_hash_name": market_hash_name}
#     data = fetch_url(url, params=params, proxies=proxies)
#     return data.get("lowest_price", "Overstock") if data and data.get("success") else "Overstock"
#
# def get_item_rarity_color(tags):
#     """Получение цвета редкости предмета"""
#     for tag in tags:
#         if tag.get("category") == "Rarity":
#             return tag.get("color", "Unknown")
#     return "Unknown"
#
# def get_item_condition(tags):
#     """Получение состояния предмета"""
#     condition_map = {
#         "Factory New": "FN",
#         "Minimal Wear": "MW",
#         "Field-Tested": "FT",
#         "Well-Worn": "WW",
#         "Battle-Scarred": "BS",
#     }
#     for tag in tags:
#         if tag.get("category") == "Exterior":
#             return condition_map.get(tag.get("localized_tag_name"), "N/A")
#     return "N/A"
#
# def parse_inventory(steam_id, proxies):
#     """Парсинг инвентаря и формирование JSON"""
#     inventory = get_inventory(steam_id, proxies)
#     if not inventory:
#         return json.dumps({"error": "Can't get the inventory"})
#
#     descriptions = {item["classid"]: item for item in inventory.get("descriptions", [])}
#     assets = inventory.get("assets", [])
#     inventory_data = []
#
#     for asset in assets:
#         classid = asset["classid"]
#         item_data = descriptions.get(classid, {})
#         market_hash_name = item_data.get("market_hash_name")
#         image_url = f"https://steamcommunity.com/economy/image/{item_data.get('icon_url', '')}"
#         tags = item_data.get("tags", [])
#
#         if market_hash_name:
#             market_price = get_market_price(market_hash_name, proxies)
#             rarity_color = get_item_rarity_color(tags)
#             condition_abbr = get_item_condition(tags)
#
#             inventory_data.append({
#                 'title': market_hash_name,
#                 'price': market_price,
#                 'color': f"#{rarity_color}",
#                 'condition': condition_abbr,
#                 'image': image_url
#             })
#             time.sleep(0.5)  # Немного задержки между запросами
#
#     return json.dumps(inventory_data)
#
# if __name__ == "__main__":
#     if len(sys.argv) < 2:
#         print(json.dumps({"error": "Steam ID wasn't received"}))
#     else:
#         steam_id = sys.argv[1]
#         proxies = get_proxies()
#         result = parse_inventory(steam_id, proxies)
#         print(result)
