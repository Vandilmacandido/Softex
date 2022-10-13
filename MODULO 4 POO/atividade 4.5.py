def cont_caracter(s):
  return print("A Senha tem",len(s),"caracter(s)!")

def so_letra(s):
  if(s.isalpha() == True):
    return print("A senha é constituida apenas por letras!")
  else:
    return print("Não há apenas letras!")

def primeira_maiuscula(s):
  return s.title()   

string = input("Digite uma senha tipo string: ")
cont_caracter(string)
so_letra(string)
primeira_maiuscula(string)
