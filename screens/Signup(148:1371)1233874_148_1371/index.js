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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/738c/5178/01d0f81685d434f91b39dcbcd19dff08"
        }}
        style={styles.ImageBackground_148_1372}
      />
      <View style={styles.View_148_1373}>
        <Text style={styles.Text_148_1373}>Sign Up</Text>
      </View>
      <View style={styles.View_148_1374}>
        <Text style={styles.Text_148_1374}>hussl.</Text>
      </View>
      <View style={styles.View_148_1375}>
        <Text style={styles.Text_148_1375}>
          For the thinkers &amp; hustlers
        </Text>
      </View>
      <View style={styles.View_148_1376}>
        <View style={styles.View_148_1377}>
          <Text style={styles.Text_148_1377}>
            Already have an account? Login
          </Text>
        </View>
        <View style={styles.View_148_1378}>
          <View style={styles.View_I148_1378_50_1499} />
          <View style={styles.View_I148_1378_50_1502}>
            <Text style={styles.Text_I148_1378_50_1502}>Password</Text>
          </View>
        </View>
        <View style={styles.View_148_1379}>
          <View style={styles.View_I148_1379_50_1499} />
          <View style={styles.View_I148_1379_50_1502}>
            <Text style={styles.Text_I148_1379_50_1502}>Email address</Text>
          </View>
        </View>
        <View style={styles.View_148_1380}>
          <View style={styles.View_I148_1380_50_1492} />
          <View style={styles.View_I148_1380_50_1493}>
            <Text style={styles.Text_I148_1380_50_1493}>Sign Up</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_148_1372: {
    width: wp("177.33333333333334%"),
    minWidth: wp("177.33333333333334%"),
    height: hp("43.44262295081967%"),
    minHeight: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("-19.53551912568306%")
  },
  View_148_1373: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("44.80874316939891%")
  },
  Text_148_1373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2,
    textTransform: "none"
  },
  View_148_1374: {
    width: wp("62.4%"),
    minWidth: wp("62.4%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("23.90710382513661%")
  },
  Text_148_1374: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_148_1375: {
    width: wp("65.06666666666666%"),
    minWidth: wp("65.06666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("34.83606557377049%")
  },
  Text_148_1375: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 12.100000381469727,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15100000381469728,
    textTransform: "none"
  },
  View_148_1376: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("51.09289617486339%")
  },
  View_148_1377: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("15.300546448087424%")
  },
  Text_148_1377: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1378: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043708%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_1378_50_1499: {
    flexGrow: 1,
    width: wp("76.26666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I148_1378_50_1502: {
    flexGrow: 1,
    width: wp("64.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%"),
    top: hp("1.3661202185792405%")
  },
  Text_I148_1378_50_1502: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1379: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_1379_50_1499: {
    flexGrow: 1,
    width: wp("76.26666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I148_1379_50_1502: {
    flexGrow: 1,
    width: wp("64.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%"),
    top: hp("1.3661202185792334%")
  },
  Text_I148_1379_50_1502: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1380: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.901639344262286%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_1380_50_1492: {
    flexGrow: 1,
    width: wp("76.26666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 196, 51, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_I148_1380_50_1493: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.769401041666665%"),
    top: hp("2.3224043715847102%")
  },
  Text_I148_1380_50_1493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
