from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name
from pyperclip import copy
import pygments
with open("_codeEncapsulator/paste_text_here.txt") as txt:
    text = txt.read()


language = text.split("\n")[0]



lexer = get_lexer_by_name((language))
formatter = HtmlFormatter(style='monokai',
                          linenos=False,
                          noclasses=True,
                          cssclass='',
                          cssstyles='overflow:auto;width:auto;' + "border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;",
                          prestyles='margin: 0')

copy(pygments.highlight(text, lexer, formatter))
