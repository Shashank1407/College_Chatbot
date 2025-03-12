import nltk
from nltk.stem import WordNetLemmatizer

nltk.data.path.append('C:\\Users\\shash\\AppData\\Roaming\\nltk_data')
lemmatizer = WordNetLemmatizer()
print(lemmatizer.lemmatize("hey"))