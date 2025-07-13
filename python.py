import os

def rename_images(folder_path):
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.webp')
    files = [f for f in os.listdir(folder_path) if f.lower().endswith(image_extensions)]

    for idx, filename in enumerate(files, start=1):
        ext = os.path.splitext(filename)[1]
        new_name = f"img{idx}{ext}"
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)
        os.rename(old_path, new_path)
        print(f"Renamed: {filename} -> {new_name}")

# Example usage
rename_images("Assets\Hair Gallery")  # Replace with your actual folder path
