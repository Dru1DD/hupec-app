import React, { useState, useEffect } from "react";
import { View, TextInput, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../components/Modal";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "../styles/friendPageStyle";

import axios from "axios";
import { ADD_ALL_SUBSCRIBER, ADD_ALL_SUBSCRTIPTION } from "../redux/action/actionType";

const FriendPage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { username, subscriptions } = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const getUsers = async (user) => {

    try {

      setLoading(true)

      const result = await axios.get("https://hupec-app.herokuapp.com/getAllUsers");
      const subscriberQuery = await axios.get("http://localhost:6000/getAllSubscriber", {
        params: {
          username
        }
      })

      await dispatch({
        type: ADD_ALL_SUBSCRIBER,
        payload: subscriberQuery.data.subscribers
      })

      await dispatch({
        type: ADD_ALL_SUBSCRTIPTION,
        payload: subscriberQuery.data.subscriptions
      })

      const usersList = result.data.filter(
        (item) => item.username !== user
      );
      

      setUsersList(() =>
        usersList.map((item) => {
          return {
            name: item.username,
            id: item._id,
          };
        })
      );
      setMasterDataSource(() =>
        usersList.map((item) => {
          return {
            name: item.username,
            id: item._id,
          };
        })
      );
    } catch (e) {
      console.log(e.message);
    }

    setLoading(!loading);
  };

  useEffect(() => { getUsers(username); }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setUsersList(newData);
      setSearchTerm(text);
    } else {
      setUsersList(masterDataSource);
      setSearchTerm(text);
    }
  };

  const addSubscriptions = async (subscriberID, subscriberName) => {
    try {
      let isAdd = checkIsFriend(subscriberName)

      isAdd ? await axios.post("https://hupec-app.herokuapp.com/addSubscriber", {
        username,
        subscriberID,
        subscriberName,
      }): null

      getUsers(username)

    } catch (e) {
      setError(!error);
    }
  };

  const checkIsFriend = (name) => {
    let isFriend = false

    subscriptions ?  subscriptions.forEach((subscriber) => {

       if(subscriber.subscriptionsName === name) {
         isFriend = !isFriend
       }
    }) : null

    return isFriend
  }

  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={(text) => searchFilter(text)}
          placeholder={"Friend username"}
        />
      </View>
      <View style={styles.boxPadding}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.list}>
            <FlatList
              data={usersList}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Text>{item.name}</Text>
                  {checkIsFriend(item.name) ? null : (
                    <TouchableOpacity
                      onPress={() => addSubscriptions(item.id, item.name)}
                    >
                      <AntDesign name="adduser" size={24} color="black" />
                    </TouchableOpacity>
                  )}
                </View>
              )}
              ItemSeparatorComponent={() => <View style={styles.line} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>

      <Modal
        modalVisible={error}
        setModalVisible={setError}
        errorText={"Ошибка. Попробуйте позже."}
      />
    </View>
  );
};

export default FriendPage;

/**
 * NOCODE API const result = await axios.get('https://v1.nocodeapi.com/dru1dd/google_sheets/rbETzjmzroxnFHOZ?tabId=users')
 *
 * if (id === subscriptionsID) {
                setError(!error)
            } else {
                await axios({
                    method: 'post',
                    url: 'https://v1.nocodeapi.com/dru1dd/google_sheets/rbETzjmzroxnFHOZ?tabId=friends',
                    params: {},
                    data: [[id, subscriptionsID, ]]
                }) 
            }
            
 */
