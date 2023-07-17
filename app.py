import streamlit as st
from PIL import Image

def test_elements():
    st.title('My first app')
    st.button("Click me")
    st.checkbox("Check me")
    st.text_input("Input some text")

    # Show a selectbox and give it a unique label for easy testing
    selectbox = st.selectbox(
        "How would you like to be contacted?",
        ("Email", "Home phone", "Mobile phone")
    )
    if selectbox:
        st.write(f"You selected {selectbox}")

def main():
    test_elements()

if __name__ == "__main__":
    main()
