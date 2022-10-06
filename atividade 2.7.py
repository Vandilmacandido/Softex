import enum
class candidato (enum.Enum):
    candidato_X = 889
    candidato_Y = 847
    candidato_Z = 515
    branco = 0
# prograam
cont_x=cont_y=cont_z=cont_nulo=0
while (True):
    while(True):
        try:
            voto=int(input('Digite seu voto: '))
            if (voto==candidato.candidato_X.value):
                print(f'Seu voto no candidato_X foi computado.')
                cont_x+=1
            elif (voto==candidato.candidato_Y.value):
                print(f'Seu voto no candidato_Y foi computado.')
                cont_y+=1
            elif (voto==candidato.candidato_Z.value):
                print(f'Seu voto no candidato_Z foi computado.')
                cont_z+=1
            elif (voto==candidato.branco.value):
                print(f'Seu voto branco foi computado.')
                cont_nulo+=1
            else:
                print('Seu voto foi anulado!')
                cont_nulo+=1
            break
        except:
            print('Digite um número válido!')
    finalizar=input('Deseja finalizar votação? [S/N] ')
    if (finalizar=='s'):
        break
cont_vencedor = cont_x
name=candidato.candidato_X.name
if (cont_vencedor < cont_y):
    cont_vencedor = cont_y
    name = candidato.candidato_Y.name
if (cont_vencedor < cont_z):
    cont_vencedor = cont_z
    name = candidato.candidato_Z.name
print(f'\nVotação encerrada!\n\nO vencedor foi {name} e esses foram os votos apurados:\ncandidato_X = {cont_x}\ncandidato_Y = {cont_y}\ncandidato_Z = {cont_z}\nVotos brancos e nulos = {cont_nulo}')