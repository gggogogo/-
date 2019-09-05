#include <iostream>
#include <vector>
#include <numeric>
#include <limits>

using namespace std;
int main(){
	int val = 0;
	int N;
	int s;
	vector<int>ary;
	cin >> N;
	while (N--){
		cin >> s;
		ary.push_back(s);
	}
	for (int i = 0; i < ary.size(); i++) {
		while (ary[i] % 3 == 0) {
			ary[i] = ary[i] / 3;
			val++;
		}
	}
	cout << val;
	return val;

}