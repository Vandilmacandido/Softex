import pandas as pd

df = pd.read_csv('/notas_alunos.csv')

media = df['nota_1'] + df['nota_2'] / 2
df["media"] = media

df.loc[df['media'] >= 7 and df['Faltas'] <= 5, 'situacao'] = 'APROVADO(A)'
df.loc[df['media'] < 7, 'situacao'] = 'REPROVADO(A)'

faltas = df["Faltas"].max()
print("O maior numero de faltas foi ", faltas, ".")
mediaGeral = df["medias"].median()
print('A media geral das notas dos alunos ', mediaGeral, '.')
mediaMaior = df["media"].max()
print('A maior media ', mediaMaior, '.')
