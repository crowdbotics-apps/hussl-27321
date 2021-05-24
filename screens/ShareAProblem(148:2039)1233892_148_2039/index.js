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
      <View style={styles.View_148_2040} />
      <View style={styles.View_148_2041}>
        <View style={styles.View_148_2042}>
          <Text style={styles.Text_148_2042}>Share a problem </Text>
        </View>
      </View>
      <View style={styles.View_148_2043}>
        <View style={styles.View_148_2044} />
        <View style={styles.View_148_2045}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec9/cd4d/d06dc5e29c86ed09dfcf167693416521"
            }}
            style={styles.ImageBackground_148_2046}
          />
        </View>
      </View>
      <View style={styles.View_148_2049}>
        <View style={styles.View_148_2050} />
        <View style={styles.View_148_2051}>
          <Text style={styles.Text_148_2051}>
            Enter your problem description
          </Text>
        </View>
        <View style={styles.View_148_2052}>
          <Text style={styles.Text_148_2052}>Problem</Text>
        </View>
      </View>
      <View style={styles.View_148_2057}>
        <View style={styles.View_148_2058} />
        <View style={styles.View_148_2059}>
          <Text style={styles.Text_148_2059}>Enter your problem category</Text>
        </View>
        <View style={styles.View_148_2060}>
          <Text style={styles.Text_148_2060}>Category</Text>
        </View>
      </View>
      <View style={styles.View_148_2061}>
        <View style={styles.View_148_2062} />
        <View style={styles.View_148_2063}>
          <Text style={styles.Text_148_2063}>Enter your problem title</Text>
        </View>
        <View style={styles.View_148_2064}>
          <Text style={styles.Text_148_2064}>Title</Text>
        </View>
      </View>
      <View style={styles.View_148_2065}>
        <View style={styles.View_I148_2065_50_1492} />
        <View style={styles.View_I148_2065_50_1493}>
          <Text style={styles.Text_I148_2065_50_1493}>Share problem</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_148_2040: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104.0983606557377%"),
    minHeight: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_148_2041: {
    width: wp("83.67285970052083%"),
    minWidth: wp("83.67285970052083%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("10.382513661202186%")
  },
  View_148_2042: {
    width: wp("83.67285970052083%"),
    minWidth: wp("83.67285970052083%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_148_2042: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2043: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("8.333333333333332%")
  },
  View_148_2044: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_148_2045: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.2295081967213122%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_148_2046: {
    width: wp("3.2006797790527344%"),
    height: hp("1.6396565515486918%"),
    top: hp("0.8194886921533477%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5996419270833329%")
  },
  View_148_2049: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("28.415300546448087%")
  },
  View_148_2050: {
    width: wp("89.06666666666668%"),
    height: hp("16.666666666666664%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_148_2051: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    top: hp("4.37158469945355%")
  },
  Text_148_2051: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2052: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999998%"),
    top: hp("0%")
  },
  Text_148_2052: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_148_2057: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("50.13661202185792%")
  },
  View_148_2058: {
    width: wp("89.06666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_148_2059: {
    width: wp("42.93333333333334%"),
    minWidth: wp("42.93333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("4.098360655737707%")
  },
  Text_148_2059: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2060: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_148_2060: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_148_2061: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("18.0327868852459%")
  },
  View_148_2062: {
    width: wp("89.06666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(244, 245, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_148_2063: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("4.098360655737704%")
  },
  Text_148_2063: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2064: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_148_2064: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_148_2065: {
    width: wp("84.8%"),
    minWidth: wp("84.8%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("61.612021857923494%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I148_2065_50_1492: {
    flexGrow: 1,
    width: wp("84.8%"),
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
  View_I148_2065_50_1493: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.553417968749997%"),
    top: hp("2.3224043715847102%")
  },
  Text_I148_2065_50_1493: {
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
