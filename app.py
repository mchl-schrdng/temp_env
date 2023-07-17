import streamlit as st

def main():
    st.title('Hello App')

    user_name = st.text_input('Enter your name')
    if user_name:
        st.write(f'Hello, {user_name}!')

if __name__ == '__main__':
    main()