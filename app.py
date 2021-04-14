import streamlit as st
import pandas as pd 
from matplotlib import pyplot as plt
from plotly import graph_objs as go
from sklearn.linear_model import LinearRegression
import numpy as np 
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors
# import streamlit.components.v1 as components  # Import Streamlit


st.markdown("<h1 style='text-align: center; color: White;background-color: Red'>Food Recommendation System</h1>",unsafe_allow_html=True)
st.markdown("<h3 style='text-align: center; color: Black;'>Drop in The required Inputs and we will do  the rest.</h3>",unsafe_allow_html=True)
# st.markdown("<h4 style='text-align: center; color: Black;'>Project by Cookie Clan</h4>", unsafe_allow_html=True)

st.sidebar.header("What is this Project about?")
st.sidebar.text("It a Web app that would help the user in determining their choice of dishes.")
st.sidebar.header("What tools where used to make this?")
st.sidebar.text("The Model was made using a dataset from Kaggle along with using Kaggle notebooks to train the model. We made use of Sci-Kit learn in order to make our Linear Regression Model.")
st.sidebar.header("Would you like to Try our product?")
nav = st.sidebar.radio("",["I'll Just use the predictor","YES! SHOW ME SOME FOOD!"])

if nav == "I'll Just use the predictor":

    st.markdown("<h3 style='text-align: center; color: Black;'>Let us help you with ordering food</h3>",unsafe_allow_html=True)


## nav = st.sidebar.radio("Navigation",["Home","IF Necessary 1","If Necessary 2"])
    st.image("assets/indian-dishes.jpg",width= 650)
    st.subheader("Whats your preference?")
    vegn = st.radio("Vegetables or none!",["veg","non-veg"],index = 1) 

    st.subheader("What Cuisine do you prefer?")
    cuisine = st.selectbox("Choose your favourite!",['Healthy Food', 'Snack', 'Dessert', 'Japanese', 'Indian', 'French',
        'Mexican', 'Italian', 'Chinese', 'Beverage', 'Thai'])


    st.subheader("How well do you want the dish to be?")  #RATING
    val = st.slider("from poor to the best!",0,10)

    food = pd.read_csv("input/food.csv")
    ratings = pd.read_csv("input/ratings.csv")
    combined = pd.merge(ratings, food, on='Food_ID')
    #ans = food.loc[(food.C_Type == cuisine) & (food.Veg_Non == vegn),['Name','C_Type','Veg_Non']]

    ans = combined.loc[(combined.C_Type == cuisine) & (combined.Veg_Non == vegn)& (combined.Rating >= val),['Name','C_Type','Veg_Non']]
    names = ans['Name'].tolist()
    x = np.array(names)
    ans1 = np.unique(x)

    finallist = ""
    bruh = st.checkbox("Choose your Dish")
    if bruh == True:
        finallist = st.selectbox("Our Choices",ans1)


    ##### IMPLEMENTING RECOMMENDER ######
    dataset = ratings.pivot_table(index='Food_ID',columns='User_ID',values='Rating')
    dataset.fillna(0,inplace=True)
    csr_dataset = csr_matrix(dataset.values)
    dataset.reset_index(inplace=True)

    model = NearestNeighbors(metric='cosine', algorithm='brute', n_neighbors=20, n_jobs=-1)
    model.fit(csr_dataset)

    def food_recommendation(Food_Name):
        n = 10
        FoodList = food[food['Name'].str.contains(Food_Name)]  
        if len(FoodList):        
            Foodi= FoodList.iloc[0]['Food_ID']
            Foodi = dataset[dataset['Food_ID'] == Foodi].index[0]
            distances , indices = model.kneighbors(csr_dataset[Foodi],n_neighbors=n+1)    
            Food_indices = sorted(list(zip(indices.squeeze().tolist(),distances.squeeze().tolist())),key=lambda x: x[1])[:0:-1]
            Recommendations = []
            for val in Food_indices:
                Foodi = dataset.iloc[val[0]]['Food_ID']
                i = food[food['Food_ID'] == Foodi].index
                Recommendations.append({'Name':food.iloc[i]['Name'].values[0],'Distance':val[1]})
            df = pd.DataFrame(Recommendations,index=range(1,n+1))
            return df['Name']
        else:
            return "No Similar Foods."


    display = food_recommendation(finallist)
    #names1 = display['Name'].tolist()

    #x1 = np.array(names)
    #ans2 = np.unique(x1)
    if bruh == True:
        bruh1 = st.checkbox("We also Recommend : ")
        if bruh1 == True:
            for i in display:
                st.write(i)

if nav == "YES! SHOW ME SOME FOOD!":

    st.markdown("<h3 style='text-align: center; color: Black;'>Food Gallery</h3>",unsafe_allow_html=True)

    st.markdown("<h3 style='text-align: center; color: Black;'>Masala Dosa</h3>",unsafe_allow_html=True)
    st.image("assets/Masala-Dos.jpg",width= 500)

    st.markdown("<h3 style='text-align: center; color: Black;'>Hyderabadi Chicken Dum Biryani</h3>",unsafe_allow_html=True)
    st.image("assets/Hyderabadi.jpg",width= 450)

    st.markdown("<h3 style='text-align: center; color: Black;'>Chilly Chicken</h3>",unsafe_allow_html=True)
    st.image("assets/chilli-chicken.jpg",width= 500)

    st.markdown("<h3 style='text-align: center; color: Black;'>Paneer 65</h3>",unsafe_allow_html=True)
    st.image("assets/paneer65.jpg",width= 500)

    st.markdown("<h3 style='text-align: center; color: Black;'>Dal Fry</h3>",unsafe_allow_html=True)
    st.image("assets/dalfry.jpg",width= 400)

    st.markdown("<h3 style='text-align: center; color: Black;'>Butter Naan</h3>",unsafe_allow_html=True)
    st.image("assets/naan.jpg",width= 500)

    st.markdown("<h3 style='text-align: center; color: Black;'>Rajma Chawal</h3>",unsafe_allow_html=True)
    st.image("assets/rajma.jpg",width= 500)

    st.markdown("<h3 style='text-align: center; color: Black;'>Goan Prawn Curry</h3>",unsafe_allow_html=True)
    st.image("assets/goan.jpg",width= 500)