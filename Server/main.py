from engine.inference import Inference
from pydantic import BaseModel
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})



class Facts(BaseModel):
    facts: list = []


@app.route('/detect',methods = ['POST'])
def root():
    data = request.get_json()
    facts = data['facts']
    knowledgeBaseFile = "./data/knowledge.json"
    inferenceEngine = Inference()
    
    return inferenceEngine.startEngine(knowledgeBaseFile, facts)


if __name__ == '__main__':
   app.run(port=5500)
