from PIL import Image, ImageOps

def invert_image(input_path, output_path):
    img = Image.open(input_path)
    inverted = ImageOps.invert(img.convert("RGB"))
    inverted.save(output_path)

if __name__ == "__main__":
    invert_image("input.jpg", "output_inverted.png")
