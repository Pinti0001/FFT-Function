# import math

# def dft_custom(x):
#     N = len(x)
#     j = (0, 1)
#     y = [0] * N

#     for k in range(N):
#         for l in range(N):
#             y[k] += x[l] * ((math.cos(2 * math.pi * j * k * l / N), -math.sin(2 * math.pi * j * k * l / N)))


#     return y

# input_sequence = [5, 4, 6, 3, 7]
# print(dft_custom(input_sequence))


import cmath

def dft_custom(x):

    N = len(x)
    j = complex(0, 1)
    y = [0] * N

    for k in range(N):
        for l in range(N):
            y[k] += x[l] * (complex(cmath.cos(2 * cmath.pi * j * k * l / N), -cmath.sin(2 * cmath.pi * j * k * l / N)))


    return y

input_sequence = [5, 4, 6, 3, 7]
print(dft_custom(input_sequence))
