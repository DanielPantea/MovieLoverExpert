from engine.components.knowledge import Knowledge
import json
import os


class KnowledgeBaseParser:
    # The class parses the file and creates the knowledge base object list.
    #
    # __knowledgeBase : list
    #     list of knowledge base objects

    def __init__(self):
        self.__knowledgeBase = list()

    def __parseInputFile(self, inputFile):
        # Reads the 'knowledge.json' file and retrieves the target and the rules
        # for the target'.
        #
        # inputFile : str
        #     name and path of the file to parse
        # returns : list
        #     list of knowledge objects

        # check if file exists
        if os.path.isfile(inputFile) is False:
            print("Knowledge file" + inputFile + "does not exist.")
            return

        # read the file
        with open(inputFile, "r") as file:
            file = json.load(file)

            for knowledge in file['target']:
                knowledgeBase = Knowledge()
                for rule in knowledge['rules']:
                    knowledgeBase.addRule(target=knowledge['name'],
                                          rule=knowledge['rules'][rule])
                self.__knowledgeBase.append(knowledgeBase)

        return self.__knowledgeBase

    def getKnowledgeBase(self, inputFile):
        # Parse the input file and return the list.
        #
        # inputFile : str
        #     name and path of the file to parse
        # returns : list
        #     list of knowledge objects

        return self.__parseInputFile(inputFile)
