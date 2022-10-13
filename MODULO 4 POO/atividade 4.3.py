class Celular:
  def __init__(self):
    self.marca = 'SAMSUNG'
    self.quantidade = 100

  def get_inf(self):
    return self.marca, self.quantidade

  def set_nova_inf(self, nova_marca, nova_quant):
    self.marca = nova_marca
    if(nova_quant >= 100):
      self.quantidade = 100
    else:
      self.quantidade = nova_quant

elemento = Celular()

print("A loja tem essa marca de celular com essa quantidade: ")
print(elemento.get_inf())

novo_item = input("Digite o nome de um nova marca de Celular: ")
nova_quant = int(input("Digite a quantidade de Celulares(a loja não suporta quantidade superior a 100 Celulares): "))
elemento.set_nova_inf(novo_item,nova_quant)

print("A loja tem essas marca de celular com essa quantidade: ")
print(elemento.get_inf())
