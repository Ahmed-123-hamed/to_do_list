import React, { useState, useEffect } from "react"
import { ActivityIndicator, Dimensions, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View, view } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
const { width, height } = Dimensions.get('screen')
import AsyncStorage from "@react-native-community/async-storage"

export default function App({ }) {

  useEffect(() => {
    <ActivityIndicator size={15} color={"darkblue"}

      style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}
    />
  })

  const [arr, setarr] = useState([
    // { job: "pray", time: "7:30 am", id: 1, apear: true },
    // { job: "college", time: "9:00 am", id: 2, apear: true },
    // { job: "music", time: "3:00 am", id: 3, apear: true },
    // { job: "language", time: "5:00 am", id: 4, apear: true },
  ])

  const [show, setshow] = useState(false)
  const [show2, setshow2] = useState(false)
  const [job, setjob] = useState("")
  const [time, settime] = useState("")
  const [id, setid] = useState(0)
  const [warn1, setwarn1] = useState("")
  const [warn2, setwarn2] = useState("")
  const [warn3, setwarn3] = useState("")
  const [obj, setobj] = useState({})
  const [index, setindex] = useState(0)

  useEffect(async () => {
    Select()
  }, [])


  async function Select() {
    // await AsyncStorage.setItem("storedArray", "[]")
    let valueOfAsync = await AsyncStorage.getItem("storedArray")
    if (valueOfAsync == null) {
      valueOfAsync = []
    } else {
      valueOfAsync = JSON.parse(valueOfAsync)
    }
    setarr(valueOfAsync)

  }

  async function Delete() {
    let array = []
    array = arr
    array.splice(index, 1)
    array = JSON.stringify(array)
    setarr(JSON.parse(array))
    await AsyncStorage.setItem("storedArray", array)
  }

  async function AddNewWork() {


    let array1 = []
    array1 = arr
    let obj = {
      job: job,
      time: time,
      id: id,
      apear: true
    }

    array1.push(obj)
    setarr(array1)
    setshow(false)
    // let array = []
    // array = arr
    // let obj = {}
    // if (job != "" && time != "" && id != "") {
    // obj = {
    //     job: job,
    //     time: time,
    //     id: id,
    //     apear: true
    // }
    //     setshow(false)
    // } else {
    //     setwarn1("the field is empty")
    //     setwarn2("the field is empty")
    //     setwarn3("the field is empty")
    // }

    // array.push(obj)
    // setarr(array)

    // await AsyncStorage.setItem("storedArray", JSON.stringify(array))
  }


  async function Update(index) {
    let array = []
    array = arr
    array[index] = obj
    array = JSON.stringify(array)
    setarr(JSON.parse(array))
    setshow2(false)
    await AsyncStorage.setItem("storedArray", array)
  }

  function Search(value) {
    let array = []
    array = arr
    for (let i = 0; i < array.length; i++) {
      if ((array[i].job.toUpperCase()).includes(value.toUpperCase())) {
        array[i].apear = true
      } else {
        array[i].apear = false
      }
    }
    array = JSON.stringify(array)
    setarr(JSON.parse(array))
  }

  function Sort1() {
    let array = []
    array = arr
    array.sort((a, b) => a.id - b.id)
    array = JSON.stringify(arr)
    setarr(JSON.parse(array))
  }

  function Sort2() {
    let array = []
    array = arr
    array.sort((a, b) => b.id - a.id)
    array = JSON.stringify(arr)
    setarr(JSON.parse(array))
  }
  function x() {
    if (job != "" && time != "" && id != "") {
      setwarn1("")
      setwarn2("")
      setwarn3("")
    }


  }


  return (
    <>
      <View style={{
        backgroundColor: 'lavender',
        flex: 1
      }}>
        <View style={{

          width: width,
          height: height * 0.85,
          backgroundColor: '#fff',
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          marginTop: 30
        }}>


          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: width
          }}>
            <View style={{
              marginTop: 25,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 30
            }}>
              <Image source={require('../img/1.jpg')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20
                }} />

              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 8
              }}>
                Hi, Ahmed Hamed
              </Text>
            </View>

            <View style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',

            }}>

              <View style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 1,
                marginRight: 25,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30
              }}>
                <Icon name="bell" size={20} color={"darkblue"} />
              </View>
            </View>


          </View>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
            <TextInput
              style={{
                width: '70%',
                height: 40,
                elevation: 4,
                backgroundColor: "#fff",
                borderRadius: 10
              }}
              placeholder="search..."
              onChangeText={(value) => Search(value)}
            />
          </View>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            marginLeft: 15
          }}>
            Here what you wil do today :
          </Text>

          {arr.map((item, index) =>
            <>
              <View style={{
                alignItems: 'center'
              }}>
                <View style={{
                  width: '80%',
                  height: 50,
                  borderRadius: 15,
                  marginTop: 18,
                  elevation: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                  display: item.apear ? "flex" : "none"
                }}>
                  <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                    <View style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: "darkblue"
                    }}>

                    </View>

                    <View>
                      <Text style={{
                        fontSize: 13,
                        marginLeft: 18,
                        fontWeight: 'bold'
                      }}>
                        {item.job}
                      </Text>

                      <Text style={{
                        fontSize: 13,
                        marginLeft: 15,
                        fontWeight: 'bold'
                      }}>
                        {item.time}
                      </Text>

                    </View>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: 80
                  }}>
                    <TouchableOpacity
                      onPress={() => Delete(index)}
                    >
                      <Icon name="trash-alt" size={20} color={"darkblue"} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setshow2(true)
                        setobj(item)
                        setindex(index)
                      }}
                    >
                      <Icon name="edit" size={20} color={"darkblue"} />
                    </TouchableOpacity>

                  </View>

                </View>
              </View>
            </>
          )}


          <TouchableOpacity style={{
            width: 110,
            height: 45,
            borderRadius: 15,
            backgroundColor: "darkblue",
            elevation: 4,
            bottom: 150,
            right: 10,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center'
          }}
            onPress={() => setshow(true)}
          >
            <Text style={{
              fontSize: 12,
              color: "#fff",
              fontWeight: 'bold'
            }}>
              + Add Tack
            </Text>

          </TouchableOpacity>


          <TouchableOpacity style={{
            width: 110,
            height: 45,
            borderRadius: 15,
            backgroundColor: "darkblue",
            elevation: 4,
            bottom: 100,
            right: 10,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center'
          }}
            onPress={() => Sort1()}
          >
            <Text style={{
              fontSize: 10,
              color: "#fff",
              fontWeight: 'bold'
            }}>
              Ascending Sort
            </Text>

          </TouchableOpacity>


          <TouchableOpacity style={{
            width: 110,
            height: 45,
            borderRadius: 15,
            backgroundColor: "darkblue",
            elevation: 4,
            bottom: 50,
            right: 10,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center'
          }}
            onPress={() => Sort2()}
          >
            <Text style={{
              fontSize: 10,
              color: "#fff",
              fontWeight: 'bold'
            }}>
              descending Sort
            </Text>

          </TouchableOpacity>

        </View>

      </View>

      {/* 1 */}
      <Modal
        visible={show}
        onRequestClose={() => setshow(false)}
      >
        <ScrollView>
          <View style={{
            backgroundColor: 'lavender',
            flex: 1
          }}>
            <View style={{
              width: width,
              height: height * 0.85,
              backgroundColor: '#fff',
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}>

              <TextInput
                style={{
                  width: '80%',
                  height: 40,
                  elevation: 4,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginTop: 10,
                  padding: 5,
                  paddingHorizontal: 15
                }}
                value={job}
                placeholder="Enter your work..."
                onChangeText={(value) => { setjob(value) }}
              />

              <Text style={{
                fontSize: 13,
                color: "darkblue",
                marginTop: 5
              }}>
                {warn1}

              </Text>

              <TextInput
                style={{
                  width: '55%',
                  height: 40,
                  elevation: 4,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginTop: 10
                }}
                value={time}
                placeholder="Enter the time..."
                onChangeText={(value) => { settime(value) }}
              />

              <Text style={{
                fontSize: 13,
                color: "darkblue",
                marginTop: 5
              }}>
                {warn2}

              </Text>

              <TextInput
                style={{
                  width: '55%',
                  height: 40,
                  elevation: 4,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginTop: 10
                }}
                value={id}
                placeholder="Enter your id..."
                onChangeText={(value) => { setid(value) }}
              />

              <Text style={{
                fontSize: 13,
                color: "darkblue",
                marginTop: 5
              }}>
                {warn3}

              </Text>

              <TouchableOpacity style={{
                width: 110,
                height: 45,
                borderRadius: 15,
                backgroundColor: "darkblue",
                elevation: 4,
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center'
              }}
                onPress={() => {
                  AddNewWork()
                  setjob("")
                  settime("")
                  setid("")
                  x()

                }}
              >
                <Text style={{
                  fontSize: 12,
                  color: "#fff",
                  fontWeight: 'bold'
                }}>
                  Add
                </Text>

              </TouchableOpacity>

            </View>

          </View>
        </ScrollView>
      </Modal>

      {/* 2 */}
      <Modal
        visible={show2}
        onRequestClose={() => setshow2(false)}
      >
        <ScrollView>
          <View style={{
            backgroundColor: 'lavender',
            flex: 1
          }}>
            <View style={{
              width: width,
              height: height * 0.85,
              backgroundColor: '#fff',
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}>

              <TextInput
                style={{
                  width: '55%',
                  height: 40,
                  elevation: 4,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginTop: 10
                }}
                value={obj.job + ""}
                onChangeText={(value) => {
                  let ob = {}
                  ob = obj
                  ob.job = value
                  ob = JSON.stringify(ob)
                  setobj(JSON.parse(ob))
                }}
              />

              <Text style={{
                fontSize: 13,
                color: "darkblue",
                marginTop: 5
              }}>
                {warn1}

              </Text>

              <TextInput
                style={{
                  width: '55%',
                  height: 40,
                  elevation: 4,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginTop: 10
                }}
                value={obj.time + ""}
                onChangeText={(value) => {
                  let ob = {}
                  ob = obj
                  ob.time = value
                  ob = JSON.stringify(ob)
                  setobj(JSON.parse(ob))
                }}
              />

              <Text style={{
                fontSize: 13,
                color: "darkblue",
                marginTop: 5
              }}>
                {warn2}

              </Text>


              <TouchableOpacity style={{
                width: 110,
                height: 45,
                borderRadius: 15,
                backgroundColor: "darkblue",
                elevation: 4,
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center'
              }}
                onPress={() => Update(index)}
              >
                <Text style={{
                  fontSize: 12,
                  color: "#fff",
                  fontWeight: 'bold'
                }}>
                  Update
                </Text>

              </TouchableOpacity>

            </View>

          </View>
        </ScrollView>
      </Modal>
    </>
  )
}