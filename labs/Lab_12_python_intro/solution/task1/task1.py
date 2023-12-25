def countRoutes(N, M):
    field = [[0] * M for _ in range(N)]
    field[0][0] = 1

    for i in range(N):
        for j in range(M):
            if i - 2 >= 0 and j - 1 >= 0:
                field[i][j] += field[i - 2][j - 1]
            if j - 2 >= 0 and i - 1 >= 0:
                field[i][j] += field[i - 1][j - 2]

    return field[N - 1][M - 1]


N = int(input())
M = int(input())

result = countRoutes(N, M)
print(result)