import speech_recognition as sr

import epitran



def audio_to_text(audio_file_path):
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_file_path) as source:
        audio_data = recognizer.record(source)
        try:
            text = recognizer.recognize_google(audio_data, language='fr-FR')
            return text
        except sr.UnknownValueError:
            return "Impossible de reconnaître l'audio"
        except sr.RequestError as e:
            return f"Erreur de service: {e}"

def audio_to_phonetic(audio_file_path):
    text = audio_to_text(audio_file_path)
    phonetic_text = convertir_en_phonetique(text)
    return phonetic_text

def convertir_en_phonetique(texte):
    # Initialiser Epitran avec le code pour le français
    epi = epitran.Epitran('fra-Latn')
    phonetique = epi.transliterate(texte)
    return phonetique
