import brawlstats as bs
from js import document
from pyodide.ffi import create_proxy
def on_button_click(event):
	input_value = document.getElementById("inf").value
	print(f"Значение: {input_value}")


brawl = bs.Client ('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY3NjkwZmY5LTRmMDgtNGMyOS1iODdmLTBmNzhlY2EyMzg1ZCIsImlhdCI6MTczMzU2NDQ5OSwic3ViIjoiZGV2ZWxvcGVyLzkxOTJhMTM4LTAzZmQtNWFkNy1iNjFkLWNkNzU1NGE0NmIyMyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNS41My4xMTMuMjAxIl0sInR5cGUiOiJjbGllbnQifV19.tkrpGkqeo5YNpIJNFaqqRnhk1YqeC1DCi-YJivqzcZIjIht1dQtlvbhFiIlq_g-7LeLU0fddjHP7WNqusLA5QQ')

while True:
    try:
        danni = document.getElementById("inf").value
        prof = brawl.get_profile (danni)
        club = prof ['club']
        print (prof ['name'], ' | ', club ['name'], ' | ', prof ['trophies'])
    except:
        danni = input ('Данные не корректны. Попробуйте ещё раз: ')
        prof = brawl.get_profile (danni)
        club = prof ['club']
        print (prof ['name'], ' | ', club ['teg'], ' | ', prof ['trophies'], ' | ', prof ['brawlers'])

proxy = create_proxy(on_button_click)
document.getElementById("MyButton").addEventListener("click", proxy)
