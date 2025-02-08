import requests

# Ваш API-ключ Steam
API_KEY = "1EECF5493FFFE01940A7CA68B297E0D0"

def get_inventory(steam_id):
    """Получение инвентаря пользователя Steam"""
    url = f"https://steamcommunity.com/inventory/{steam_id}/730/2?l=english&count=5000"
    print(url)
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        print("Ошибка при получении инвентаря.")
        return None

def get_market_price(market_hash_name):
    """Получение цены предмета через Steam API"""
    url = "https://steamcommunity.com/market/priceoverview/"
    params = {
        "appid": 730,  # 730 — это CS:GO
        "currency": 1,  # 1 — USD (можно изменить на другую валюту)
        "market_hash_name": market_hash_name,
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        if data.get("success"):
            return data.get("lowest_price", "Цена не найдена")
    return "Не удалось получить цену"

def get_item_rarity_color(tags):
    """Получение цвета редкости предмета"""
    rarity_colors = {
        "Consumer Grade": "B2B2B2",  # Серый
        "Industrial Grade": "5E98D9",  # Синий
        "Mil-Spec Grade": "4B69FF",  # Голубой
        "Restricted": "8847FF",  # Фиолетовый
        "Classified": "D32CE6",  # Розовый
        "Covert": "EB4B4B",  # Красный
        "Contraband": "E4AE39",  # Золотой
    }

    for tag in tags:
        if tag.get("category") == "Rarity":
            rarity_name = tag.get("localized_tag_name", "Неизвестная редкость")
            return rarity_colors.get(rarity_name, "Неизвестный цвет")
            return tag.get()
    return "Неизвестный цвет"

def get_item_condition(tags):
    """Получение состояния предмета в сокращенном формате"""
    condition_abbreviations = {
        "Factory New": "FN",
        "Minimal Wear": "MW",
        "Field-Tested": "FT",
        "Well-Worn": "WW",
        "Battle-Scarred": "BS",
    }

    for tag in tags:
        if tag.get("category") == "Exterior":
            condition_name = tag.get("localized_tag_name", "Неизвестное состояние")
            return condition_abbreviations.get(condition_name, "N/A")
    return "N/A"

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
        tags = item_data.get("tags", [])

        if market_hash_name:
            market_price = get_market_price(market_hash_name)
            rarity_color = get_item_rarity_color(tags)
            condition_abbr = get_item_condition(tags)
            print(f"Название: {market_hash_name}")
            print(f"Цена на маркете: {market_price}")
            print(f"Цвет редкости: #{rarity_color}")
            print(f"Состояние: {condition_abbr}")
            print(f"Картинка: {image_url}\n")
        else:
            print("Информация о предмете отсутствует.\n")

# Пример использования
steam_id = "76561198088121745"  # Замените на ваш Steam ID
parse_inventory(steam_id)