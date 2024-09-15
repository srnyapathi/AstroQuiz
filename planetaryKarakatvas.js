const planetaryKarakatvas = {
    Sun: ["Copper", "Brass", "Gold", "Valuables", "Ornaments", "Pearls", "Ruby", "Stones", "Red coral", "Topaz", "Timber", "Cattle", "Almond", "Chillies", "Lion", "Wool", "Grass", "Deer", "Goose", "Orange", "Heart", "Bones", "Stomach", "Eye", "Body", "Face", "Soul", "Bile", "Feverish or inflammatory complaints", "Diseases of eye", "Head", "Thinning of hair", "Red eyes", "Fortress", "Forest", "Shores of river", "Temples", "Palatial buildings and apartments", "Father", "Vitalities", "Power or strength", "Courage", "Bitter taste", "Valour", "Wickedness", "Mental purity", "Awakening of knowledge", "Ambition", "Enthusiasm", "Freedom from disease", "Short stature", "Anger that doesn’t cool easily", "Heat", "Worship of Shiva", "Favour of king", "World of mortals", "Travelling", "Dealing with affairs of kingdom or government", "Open conduct", "Strong at noon", "Sattwik temper", "Atman or soul", "King", "Ruler or airspace", "Physician", "Officiating priest at sacrifice", "Anything auspicious", "Strong and tall trees", "A half year", "Wandering over the hills", "Circular forms", "Blood red cloth", "Capturing the foe", "Saffron", "Thick yarn", "Yagnas", "Mountaineering"],
    Moon: ["Silver", "Pearl", "Diamond", "Crystals", "Ruby", "Fruits", "Sugarcane", "Wheat", "Pulse", "Algae", "Barley", "Flowers", "Fish", "Other aquatic species", "Serpents", "Horned animals", "Mind", "Facial luster", "Face", "Stomach", "Oral cavity", "Phlegmatic constitution", "Epilepsy", "Ulcer", "Acidity", "Malarial fever", "Ailments of shoulders", "Wells", "Tank", "Facing west", "Middle world", "Kitchen", "Toilets", "Distilleries", "Mother", "Self", "Intelligence", "Nature", "Happiness", "Impartial outlook", "Short stature", "Abilities", "Sense of humour", "Swiftness", "Fondness for curd", "Beauty", "Fame", "Brown and blue eyes", "Soft speech", "Delicacy", "Disease", "Laziness", "Sleep", "Consumption", "Whiteness", "Muhurat", "Worship of Parvati", "Favour", "Nourishment", "Pleasures", "Middle age", "Manaha or mind", "Brahmin", "Woman", "Lover", "Washerman", "Sea bath", "Monsoon season", "Perfumes", "Going to fortress", "Liquids", "Pilgrimages", "Noon", "Waist band", "Salt", "Tapasvi", "Strong at night", "Saline", "Eating", "Going to distant places", "Milk", "Fountains", "Farming", "Good food", "Cutlery", "Crockery"],
    Jupiter: ["Precious stones", "Gold", "Topaz", "Cats eye", "Peepal tree", "Black gram", "Fruit plants", "Cows", "Horses", "Buffaloes", "Brain", "Knee", "Fats in the body", "Digestive disorders", "Wind complaints", "Phlegm", "Dropsy", "Mansions", "Strange peculiar place", "Son", "Grandson", "Elder brother", "Grandfather", "Dear friend", "Jurisprudence", "Large body", "Valour", "Fame", "Logic", "Proficiency", "Great eloquence", "Long intellect", "Knowledge of texts", "Gentle", "Sattwik nature", "Reading of others' thoughts", "Benefic", "Religious and other duties", "Astrology", "Physical health", "Charity", "Dharma", "Old age", "Yellow colour", "Impartiality", "Penance", "Mantra", "Long poems", "Brahmin", "Teachers", "Traders", "Chariot", "Deposits", "Treasury", "Holy water", "Wealth of elephants", "Indra", "Vedanta philosophy", "Second half of winter", "Place of pilgrimage", "Idol of Brahma", "Throne", "Honey", "Oil", "Silk", "Paunch"],
    Mercury: ["Knowledge", "Speech", "Lecturing", "Humility", "Fear", "Devotion", "Self-control", "Tendency to laugh", "Well-versed in Puranas", "Scholar", "Witty language", "Beneficial nature", "Ratna parkhi", "Education", "Sculpture", "Maths", "Astrology", "Commerce", "Vedanta system", "Bad dreams", "Moisture", "Renunciation", "Religious rites", "Season", "Dancing", "Evenness", "Grammar", "Infantry", "Eunuch", "Child", "Shudras", "Tantrik", "Clerks", "Script", "Writing", "New clothes", "Construction of palaces", "Grass green colour", "Pilgrimages", "Black magic", "Looking crosswise", "Strong in the morning", "Hemanta season (beginning of winter)", "Bills", "Dust"],
    Mars: ["Ruling over people", "Opposition", "Battle", "Foes", "Love of deep red objects", "Service under ruler", "Obstacles", "Youth", "Pungent taste", "Summer season", "Brahma", "Favour of king", "Independence", "King", "Thief", "Minister", "Goldsmith", "Commander of army", "Cooks", "Archeologist", "Obstinate fool", "Sound of trumpet", "Going to a foreign country", "Supporter", "Fire", "Controversy", "Arguments", "Day", "Sky", "Sword", "Spear", "Burnt place", "Earthen ware", "Eating non-veg food", "Abusing", "Man", "Axe", "Forest officer", "Village chief", "Peculiar clothes", "Spreading rumours", "Scandals", "Firearm", "Samaveda", "Summer"],
    Venus: ["Enjoyment", "Love of humour", "Profundity", "Eminence", "Well built", "Income", "Acid taste", "Commands", "Cross vision", "Strange poetry", "Music", "Luster", "Charming speech", "Tenderness", "Kingdom", "Decoration", "Marriage festivities", "Respect", "Women", "Vaishyas", "Ruler", "Merchant", "Call girls", "Good clothes", "White umbrella", "Marriage", "Conveyances", "Saltish taste", "Fortnight", "Yajurveda", "Cosmetics", "Dancing", "Middle age", "Swimming", "Fortune", "Walking", "Well-proportioned limbs", "Trade", "Spring season", "Possessing many women", "Musical instruments", "Inclined to sex", "Veena", "Flute", "Expert in Bharatanatyam"],
    Saturn: ["Inferior cereals", "Horse", "Ass", "Elephant", "Snake", "Goat", "Bird", "Dog", "Buffalo", "Skin", "Tendon", "Bone", "Nerves", "Disease", "Dirty house", "Battlefield", "Where labor class lives", "Garbage", "Dilapidated structure", "Cousin", "Father (for those born during night)", "Distress", "Enmity", "Dirty mind", "Disgust", "Charity", "Longevity", "Indignation", "Long-lasting", "Exertion", "Cruelty", "Generosity", "Fierce", "Severe", "Chained", "Ill health", "Obstruction", "Standards", "Death", "Old age", "Happiness from woman", "Telling lies", "Servant's duties", "Sins", "Friendship with wicked", "Destiny", "Outcastes", "Lords", "Eunuchs", "Shudras", "Brahmin with tamasik qualities", "Blacksmith", "Income", "Maid servant", "Persons with deformed limbs", "Wind", "Untraditional acts", "Roaming in woods", "Strong at the end of the day", "Born from a low woman/adultery or a widow", "Dirty cloth", "Black colour", "Ashes", "A year", "Blanket", "Thefts"],
    Rahu: ["Gomedh", "Iron", "Emerald", "Bushes", "Sesamum", "Serpents", "Reptiles", "Mosquito", "Bug", "Owl", "Insects", "Bones", "Hidden abdominal ulcer", "Malignant tumour", "Acute duodenal pain", "Complaint of wind and phlegm", "Boils and eruptions", "Catarrh", "Difficult places", "Dense forests", "World of snakes", "Tunnels", "Ant hills", "Graveyards", "Maternal grandfather", "Harsh speech", "Faulty logic", "Unclean", "Great valour", "Falsehood", "Perplexity", "Masochism", "Wicked", "Homosexuality", "Lesbianism", "Gambling", "Strong at sunset", "Sex with wicked women", "Going abroad", "Living in a world of dreams", "Old age", "Corruption", "Bribery", "Malechha", "Shudra", "Irreligious person", "Sinful woman", "Looking downwards", "Southern breeze", "Umbrella", "Air", "Travels", "Duration of one muhurat", "Conveyance", "Association with animals", "Heretic", "Urdu or Persian language", "Planet of confusion and material inspiration"],
    Ketu: ["Stones", "Bush", "Thorns", "Dog", "Ass", "Cock", "Vultures", "Horned animals", "Feet", "Painful fevers", "Wind complaints", "Wounds", "Diseases of stomach and eyes", "Duodenal ulcer", "Smallpox", "Skin eruptions", "Holes", "Tunnels", "Darkness", "Father's father", "Pain", "Grief", "Friendship with hunters", "Instability of mind", "Great penance", "Hypersensitivity", "Hunger", "Stupidity", "Knowledge of Brahma", "Renunciation", "Knowledge of animals", "Poor eating habits", "Salvation", "Consumption", "Prosperity", "Mantra shastra", "Achieving the heights like a flag mast", "Luxury", "Fortune", "Suffering from foes", "Doctors", "Shudras", "Snake charmers", "Buddhists", "Wealth", "Treasure", "Final salvation", "Taking bath in Ganges", "Zoology", "Observing silence", "Vedanta", "Association with shudras", "Revocation of imprisonment", "Mysterious planet which also indicates intrigues"]
};

module.exports = planetaryKarakatvas;