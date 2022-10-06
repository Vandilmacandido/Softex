r = True
while(r):

    try:
        nome = str(input('Digite seu nome completo: '))
        ano = int(input('Digite seu ano de nascimento: '))

        if(ano >= 1922 and ano <= 2021):
            idade = 2022 - ano
            print(nome, 'você tem (ou terá ainda esse ano)', idade, 'anos!')
            r = False
        elif(ano < 1922 or ano > 2021):
            print('Dados incorretos')
    except:
        print('Dados incorretos')