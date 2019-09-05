import math

N = int(input())
list = []
# N = 3
while 1:
    try:
        list.append(input().split('\n'))
    except:
        break

# list = [['2,5,6,7,9,5,7'],['1,7,4,3,4']]
# list = [['2,5,6,7,9,5,7'],['1,7,4,3,4']]
n = len(list)
maxlen = 0
for i in range(n):
    ll = list[i][0]
    maxlen = max(len(ll.split(',')), maxlen)

t = math.ceil(maxlen/N)
output = ''

def concat(llist):
    out = ''
    try:
        for n in range(len(llist)-1):
            out += llist[n]+','
        out += llist[-1]
    except:
        out = llist[-1]
    return out

for tt in range(int(t)):
    for i in range(n):
        list2 = list[i][0].split(',')
        try:
            costr = concat(list2[tt*N:(tt+1)*N])
            if tt == 0 and i == 0:
                output = output + costr
            else:
                output = output + ',' + costr
        except:
            pass

print(output)


exit(0)