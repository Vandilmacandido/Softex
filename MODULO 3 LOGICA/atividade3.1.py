vetor = [12, 60, 9, 4, 14, 48, 23, 50, 47, 57, 
13, 45, 49, 35, 19, 5, 25, 31, 27, 40, 
2, 56, 28, 36, 33, 73, 29, 17, 7, 20]

def insertionSort(array):

    for step in range(1, len(array)):
        key = array[step]
        j = step -1

        while j >= 0 and key < array[j]:
            array[j + 1] = array[j]
            j = j - 1

        array[j + 1] = key

print("Elementos do vetor: ")
print(vetor)

insertionSort(vetor)
print("\nElementos do vetor em ordem crescente: ")
print(vetor)
