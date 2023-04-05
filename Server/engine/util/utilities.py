def sortDictionary(matchesRules):
    return {key: value for key, value in sorted(matchesRules.items(), key=lambda item: item[1], reverse=True)}
