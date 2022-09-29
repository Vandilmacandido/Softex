def soma():
    x = float(input("Primeiro numero: "))
    y = float(input("Segundo numero: "))
    return print("Soma: ",x+y)

def subtracao():
    x = float(input("Primeiro numero: "))
    y = float(input("Segundo numero: "))
    return print("Subtracao: ",x-y)

def multiplicacao():
    x = float(input("Primeiro numero: "))
    y = float(input("Segundo numero: "))
    return print("Multiplicacao: ",x*y)

def divisao():
    x = float(input("Primeiro numero: "))
    y = float(input("Segundo numero: "))
    return print("Divisao: ",x/y)

opcao=1

while opcao:
    print("1. Somar")
    print("2. Subtrair")
    print("3. Multiplicação")
    print("4. Divisão ")

    opcao = int(input("Opção: "))

    if(opcao==1):
        soma()
    if(opcao==2):
        subtracao()
    if(opcao==3):
        multiplicacao()
    if(opcao==4):
        divisao()
  