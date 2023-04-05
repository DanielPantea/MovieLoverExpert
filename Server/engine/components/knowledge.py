class Rule:
    # Rule class stores a rule in string format
    #
    # __rule : str
    #    rule for knowledge base

    def __init__(self, rule: str):
        self.__rule = rule

    def getRule(self):
        return self.__rule

    def __eq__(self, other):
        # Checks if there is a substring in current rule that matches
        # the second rule.
        #
        # other : Rule
        #     Rule object
        # returns : bool
        #     True if a match

        if other.__rule.__contains__(self.__rule):
            return True
        return False


class Knowledge:
    # Knowledge class connects the target with the rules.
    #
    # __target : str
    #     name of the target / output
    # __rules : list
    #     list of Rule objects

    def __init__(self):
        self.__target = None
        self.__rules = list()

    def addRule(self, target, rule):
        # Add new rule to Knowledge
        #
        # target : str
        #     output / name of the target
        # rule : str
        #     rule for knowledge base

        self.__target = target
        self.__rules.append(Rule(rule))

    def __str__(self):
        # Prints the knowledge base.

        data = list()
        data.append(self.__target)
        data.append(" -> \n")
        for rule in self.__rules:
            data.append("\t  {")
            data.append(rule.getRule())
            data.append("}  \n")
        data.append("\n\n")

        return "".join(data)

    def getTarget(self):
        # Gets the name of the output
        #
        # returns : str
        #     the name of the target

        return self.__target

    def getRules(self):
        # Gets the list of all rules from the knowledge base
        #
        # returns : list
        #     list of rules

        return self.__rules
