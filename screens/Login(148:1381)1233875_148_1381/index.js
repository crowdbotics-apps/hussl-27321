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
      <View style={styles.View_148_1382}>
        <Text style={styles.Text_148_1382}>Login</Text>
      </View>
      <View style={styles.View_148_1383}>
        <View style={styles.View_I148_1383_50_1499} />
        <View style={styles.View_I148_1383_50_1502}>
          <Text style={styles.Text_I148_1383_50_1502}>Email address</Text>
        </View>
      </View>
      <View style={styles.View_148_1384}>
        <View style={styles.View_I148_1384_50_1499} />
        <View style={styles.View_I148_1384_50_1502}>
          <Text style={styles.Text_I148_1384_50_1502}>Password</Text>
        </View>
      </View>
      <View style={styles.View_148_1385}>
        <Text style={styles.Text_148_1385}>hussl.</Text>
      </View>
      <View style={styles.View_148_1386}>
        <Text style={styles.Text_148_1386}>
          For the thinkers &amp; hustlers
        </Text>
      </View>
      <View style={styles.View_148_1387}>
        <Text style={styles.Text_148_1387}>
          Do not have an account? Sign up
        </Text>
      </View>
      <View style={styles.View_148_1388}>
        <View style={styles.View_I148_1388_50_1492} />
        <View style={styles.View_I148_1388_50_1493}>
          <Text style={styles.Text_I148_1388_50_1493}>Login</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2207/80e7/cf14a2b41b67a723a50cde5998ac1c96"
        }}
        style={styles.ImageBackground_148_1389}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_148_1382: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666667%"),
    top: hp("44.80874316939891%")
  },
  Text_148_1382: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2,
    textTransform: "none"
  },
  View_148_1383: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("51.09289617486339%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_1383_50_1499: {
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
  View_I148_1383_50_1502: {
    flexGrow: 1,
    width: wp("64.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("1.3661202185792334%")
  },
  Text_I148_1383_50_1502: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1384: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("58.7431693989071%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_1384_50_1499: {
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
  View_I148_1384_50_1502: {
    flexGrow: 1,
    width: wp("64.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("1.3661202185792405%")
  },
  Text_I148_1384_50_1502: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1385: {
    width: wp("62.4%"),
    minWidth: wp("62.4%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("24.18032786885246%")
  },
  Text_148_1385: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "none"
  },
  View_148_1386: {
    width: wp("65.06666666666666%"),
    minWidth: wp("65.06666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("34.83606557377049%")
  },
  Text_148_1386: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 12.100000381469727,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.15100000381469728,
    textTransform: "none"
  },
  View_148_1387: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("66.39344262295081%")
  },
  Text_148_1387: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1388: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("71.99453551912568%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_1388_50_1492: {
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
  View_I148_1388_50_1493: {
    flexGrow: 1,
    width: wp("13.667860921223959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.436083984375%"),
    top: hp("2.3224043715847102%")
  },
  Text_I148_1388_50_1493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_148_1389: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.6%"),
    top: hp("-4.508196721311475%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
