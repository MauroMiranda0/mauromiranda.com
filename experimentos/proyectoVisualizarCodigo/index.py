import os
import webbrowser


def preview():
    """Abre la interfaz local del visualizador en el navegador."""
    filename = "index.html"
    ruta_absoluta = os.path.abspath(filename)
    url_local = f"file://{ruta_absoluta}"
    print(f"Abriendo el editor interactivo en: {url_local}")
    webbrowser.open(url_local)


if __name__ == "__main__":
    preview()
