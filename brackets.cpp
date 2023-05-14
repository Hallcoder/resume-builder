#include<iostream.h>
#include<stack.h>
using namespace std;
bool checkParentheses(string expr){
     stack<char> brackets;
     for(int i =0; i < expr.length();i++){
             if(brackets.empty()){
               brackets.push(expr[i]);
             }
             else if(brackets.top() == '{' && expr[i] == '}'
                  || brackets.top() == '(' && expr[i] == ')'
                  || brackets.top() == '[' && expr[i] == ']'){
                    brackets.pop();
                  }else{
                    brackets.push(expr[i]);
                  }                 
                  }
        if(brackets.empty()){
            return true;
        }
     return false;
     }
int main(){
    string expression;
    cout<<"Enter your desired expression"
    cin>>expression;  
    if(checkParentheses(expression)){
        cout<<"Balanced";
    }else{
        cout<<"Not balanced!";
    }
    return 0;
    }
