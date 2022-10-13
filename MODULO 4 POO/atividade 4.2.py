class caneta:
  def __init__(self, cor):
    self.cor = cor
    self.tinta = 100
  
  def qntinta(self, qnt):
    self.tinta = self.tinta - qnt
     
caneta1 = caneta('Rosa')
print("A caneta de cor",caneta1.cor,"tem",caneta1.tinta,"% de tinta.")
print("Caneta",caneta1.cor,", sendo utilizada...")
caneta1.qntinta(40)
print("Foi utilizado da caneta, de cor",caneta1.cor,",",caneta1.tinta,"% de tinta.")

caneta2 = caneta('Azul')
print("\n\nA caneta de cor",caneta2.cor,"tem",caneta2.tinta,"% de tinta.")
print("Caneta",caneta2.cor,", sendo utilizada...")
caneta2.qntinta(60)
print("Foi utilizado da caneta, de cor",caneta2.cor,",",caneta2.tinta,"% de tinta.")

caneta3 = caneta('Petra')
print("\n\nA caneta de cor",caneta3.cor,"tem",caneta3.tinta,"% de tinta.")
print("Caneta",caneta3.cor,", sendo utilizada...")
caneta3.qntinta(80)
print("Foi utilizado da caneta, de cor",caneta3.cor,",",caneta3.tinta,"% de tinta.")
