from PIL import Image
import pytesseract
import os
os.environ["TESSDATA_PREFIX"] = "./tes/tessdata"

def recognize_text(image_path, lang='eng'):
    """
    Recognize text from an image using OCR.
    
    Args:
    - image_path: Path to the image file.
    - lang: Language code (default is 'eng' for English).
    
    Returns:
    - text: Recognized text (string).
    """
    try:
        # Use pytesseract to perform OCR on the image
        pytesseract.pytesseract.tesseract_cmd = r"./tes/tesseract"
        text = pytesseract.image_to_string(Image.open(image_path),lang=lang)
        return text
    except Exception as e:
        print("Error during OCR:", str(e))
        return None
