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
      <View style={styles.View_342_713}>
        <View style={styles.View_342_698} />
        <View style={styles.View_342_699}>
          <Text style={styles.Text_342_699}>“</Text>
        </View>
        <View style={styles.View_342_700}>
          <Text style={styles.Text_342_700}>“</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e0f/bd75/1411181c74a84b051eff2c2301e2befa"
          }}
          style={styles.ImageBackground_342_712}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_342_713: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_342_698: {
    width: wp("100%"),
    height: hp("85.45454545454545%"),
    top: hp("3.0303030303030303%"),
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
  View_342_699: {
    width: wp("22.88135593220339%"),
    top: hp("12.727272727272727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9661016949152543%")
  },
  Text_342_699: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  View_342_700: {
    width: wp("22.88135593220339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.30508474576271%")
  },
  Text_342_700: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 77,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.96,
    textTransform: "none"
  },
  ImageBackground_342_712: {
    width: wp("15.677966101694915%"),
    height: hp("11.515151515151516%"),
    top: hp("88.48484848484848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.0677966101695%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
