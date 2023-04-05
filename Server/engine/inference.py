import os

from engine.components.knowledge import Knowledge
from engine.parser.knowledgeParser import KnowledgeBaseParser
from engine.util.utilities import sortDictionary

class Inference:
    def __init__(self):
        self.__knowledgeParser = KnowledgeBaseParser()
        self.__knowledgeBase = None

    def startEngine(self, knowledgeBase, facts):
        if not os.path.isfile(knowledgeBase):
            print("The knowledge base file does not exist.")

        self.__knowledgeBase = self.__knowledgeParser.getKnowledgeBase(knowledgeBase)

        output = self.__inferenceResolve(facts)
        if output[0]:
            return output[1]
      
        return "There is no movie recommendation to suit the requirements."

    def __inferenceResolve(self, facts):
        userKnowledge = Knowledge()

        # create a knowledge base from the user input
        for userIn in facts:
            userKnowledge.addRule("user", userIn)

        return self.__runForwardChain(userKnowledge)

    def __runForwardChain(self, userBase):
        # The function implements forward chaining in three steps.
        # First, each user rule is matched with all rules for each Knowledge target.
        # Secondly, the percentage for each target is calculated.
        # Finally, the percents that are higher than minimum percents are returned.
        #
        # userBase : Knowledge
        #     Knowledge object created by parsing the user input
        # returns : tuple
        #     bool : True denoting match found
        #     str : formatted target name and percentage

        matchesRules = dict()

        # get each knowledge from the knowledge base
        for knowledge in self.__knowledgeBase:
            match = 0

            # compare each rule
            for rule in knowledge.getRules():
                for userRule in userBase.getRules():
                    if isinstance(rule._Rule__rule, list):
                        for elem in rule._Rule__rule:
                            if elem == userRule._Rule__rule:
                                match += 1
                    elif rule == userRule:
                        match += 1

            # add the percent of match for each target
            length = 1
            for rule in knowledge.getRules():
                if isinstance(rule._Rule__rule, list):
                    length += len(rule._Rule__rule)
                else:
                    length += 1
            matchesRules[knowledge.getTarget()] = (match / length) * 100

        matchesRules = sortDictionary(matchesRules)

        # print results
        for target, percent in matchesRules.items():
            print("Target [" + target + "] matched " + str(percent))

        minPercent = 50
        # return the first match if it is greater than the minimum percent
        for target, percent in matchesRules.items():
            if percent >= minPercent:
                return True, target + " " + str(percent) + " % sure"
            else:
                return False, target
