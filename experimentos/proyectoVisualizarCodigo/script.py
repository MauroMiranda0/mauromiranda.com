from pathlib import Path

from IPython.display import HTML, display


def preview():
    """Renderiza en Colab la misma interfaz base usada en local."""
    html_path = Path(__file__).with_name("index.html")
    display(HTML(html_path.read_text(encoding="utf-8")))


preview()
