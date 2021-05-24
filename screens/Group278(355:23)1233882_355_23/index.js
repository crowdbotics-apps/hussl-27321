import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_355_25} />
      <View style={styles.View_355_26}>
        <Text style={styles.Text_355_26}>“</Text>
      </View>
      <View style={styles.View_355_27}>
        <Text style={styles.Text_355_27}>“</Text>
      </View>
      <View style={styles.View_355_28}>
        <Text style={styles.Text_355_28}>3d</Text>
      </View>
      <View style={styles.View_355_35}>
        <Text style={styles.Text_355_35}>Hotels are too expensive</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
        }}
        style={styles.ImageBackground_355_36}
      />
      <View style={styles.View_355_37}>
        <View style={styles.View_355_38}>
          <Text style={styles.Text_355_38}>2</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3917/6369/9bd24b368c077a96ddff93ada39d30f3"
          }}
          style={styles.ImageBackground_355_39}
        />
      </View>
      <View style={styles.View_355_41}>
        <View style={styles.View_355_42}>
          <Text style={styles.Text_355_42}>325</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
          }}
          style={styles.ImageBackground_355_43}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_355_25: {
    width: wp("100%"),
    height: hp("76.96969696969697%"),
    top: hp("-0.6060606060606061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_355_26: {
    width: wp("11.864406779661017%"),
    top: hp("9.090909090909092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9661016949152543%")
  },
  Text_355_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_355_27: {
    width: wp("11.864406779661017%"),
    top: hp("20.606060606060606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.89830508474576%")
  },
  Text_355_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_355_28: {
    width: wp("23.30508474576271%"),
    top: hp("8.484848484848486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.1864406779661%")
  },
  Text_355_28: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_355_35: {
    width: wp("80.50847457627118%"),
    top: hp("27.878787878787882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.745762711864407%")
  },
  Text_355_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_355_36: {
    width: wp("15.677966101694915%"),
    height: hp("11.515151515151516%"),
    top: hp("76.36363636363637%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.0677966101695%")
  },
  View_355_37: {
    width: wp("13.559322033898304%"),
    height: hp("15.151515151515152%"),
    top: hp("54.54545454545454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.9322033898305%")
  },
  View_355_38: {
    width: wp("3.389830508474576%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.169491525423737%")
  },
  Text_355_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_355_39: {
    width: wp("6.779661016949152%"),
    height: hp("9.696969696969697%"),
    top: hp("2.424242424242429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_355_41: {
    width: wp("19.387636346332098%"),
    height: hp("15.151515151515152%"),
    top: hp("54.54545454545454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.6271186440678%")
  },
  View_355_42: {
    width: wp("8.898305084745763%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.489331261586337%")
  },
  Text_355_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_355_43: {
    width: wp("7.099499944913185%"),
    height: hp("9.696969696969697%"),
    top: hp("2.424242424242429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
