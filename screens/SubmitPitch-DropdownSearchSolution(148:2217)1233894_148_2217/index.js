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
      <View style={styles.View_148_2218} />
      <View style={styles.View_148_2219}>
        <View style={styles.View_148_2220}>
          <Text style={styles.Text_148_2220}>Submit pitch</Text>
        </View>
      </View>
      <View style={styles.View_148_2221}>
        <View style={styles.View_148_2222} />
        <View style={styles.View_148_2223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec9/cd4d/d06dc5e29c86ed09dfcf167693416521"
            }}
            style={styles.ImageBackground_148_2224}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("148_2246"))
        }
      >
        <View style={styles.View_148_2238}>
          <View style={styles.View_153_1750}>
            <View style={styles.View_148_2239} />
            <View style={styles.View_148_2240} />
          </View>
          <View style={styles.View_148_2241}>
            <Text style={styles.Text_148_2241}>Search solution title </Text>
          </View>
          <View style={styles.View_148_2242}>
            <Text style={styles.Text_148_2242}>Airbnb Solution</Text>
          </View>
          <View style={styles.View_148_2243}>
            <Text style={styles.Text_148_2243}>Uber Solution</Text>
          </View>
          <View style={styles.View_148_2244}>
            <Text style={styles.Text_148_2244}>Startup Solution</Text>
          </View>
          <View style={styles.View_148_2245}>
            <Text style={styles.Text_148_2245}>
              Which solution are you pitching?
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_153_1691}>
        <View style={styles.View_I153_1691_50_1492} />
        <View style={styles.View_I153_1691_50_1493}>
          <Text style={styles.Text_I153_1691_50_1493}>Submit pitch </Text>
        </View>
      </View>
      <View style={styles.View_153_1692}>
        <View style={styles.View_153_1693}>
          <View style={styles.View_153_1694} />
          <View style={styles.View_153_1695}>
            <Text style={styles.Text_153_1695}>
              Upload photos, videos, files for your project pitch
            </Text>
          </View>
          <View style={styles.View_153_1696}>
            <Text style={styles.Text_153_1696}>Files</Text>
          </View>
        </View>
        <View style={styles.View_153_1697}>
          <View style={styles.View_153_1698} />
          <View style={styles.View_153_1699}>
            <Text style={styles.Text_153_1699}>
              Enter link for your solution pitch{" "}
            </Text>
          </View>
          <View style={styles.View_153_1700}>
            <Text style={styles.Text_153_1700}>Link</Text>
          </View>
        </View>
        <View style={styles.View_153_1701}>
          <Text style={styles.Text_153_1701}>+ Add another file</Text>
        </View>
        <View style={styles.View_153_1702}>
          <Text style={styles.Text_153_1702}>+ Add another link</Text>
        </View>
      </View>
      <View style={styles.View_153_1703}>
        <View style={styles.View_153_1704} />
        <View style={styles.View_153_1705}>
          <Text style={styles.Text_153_1705}>Enter your solution title</Text>
        </View>
        <View style={styles.View_153_1706}>
          <Text style={styles.Text_153_1706}>Title</Text>
        </View>
      </View>
      <View style={styles.View_153_1707}>
        <View style={styles.View_153_1708} />
        <View style={styles.View_153_1709}>
          <Text style={styles.Text_153_1709}>
            Enter your full solution description
          </Text>
        </View>
        <View style={styles.View_153_1710}>
          <Text style={styles.Text_153_1710}>Description</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_148_2218: {
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
  View_148_2219: {
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
  View_148_2220: {
    width: wp("83.67285970052083%"),
    minWidth: wp("83.67285970052083%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_148_2220: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2221: {
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
  View_148_2222: {
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
  View_148_2223: {
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
  ImageBackground_148_2224: {
    width: wp("3.2006797790527344%"),
    height: hp("1.6396565515486918%"),
    top: hp("0.8194720158811482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.599609375%")
  },
  View_148_2238: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("16.530054644808743%")
  },
  View_153_1750: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584703%")
  },
  View_148_2239: {
    width: wp("89.06666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 196, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_148_2240: {
    width: wp("89.06666666666668%"),
    height: hp("12.704918032786885%"),
    top: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 196, 51, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_148_2241: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("4.098360655737707%")
  },
  Text_148_2241: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2242: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("9.836065573770494%")
  },
  Text_148_2242: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2243: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("13.387978142076502%")
  },
  Text_148_2243: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2244: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("16.939890710382514%")
  },
  Text_148_2244: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_2245: {
    width: wp("57.599999999999994%"),
    minWidth: wp("57.599999999999994%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_148_2245: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_1691: {
    width: wp("84.8%"),
    minWidth: wp("84.8%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("100.13661202185793%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_1691_50_1492: {
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
  View_I153_1691_50_1493: {
    flexGrow: 1,
    width: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.22005208333333%"),
    top: hp("2.322404371584682%")
  },
  Text_I153_1691_50_1493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_153_1692: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("25.136612021857925%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("71.72131147540983%")
  },
  View_153_1693: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_153_1694: {
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
  View_153_1695: {
    width: wp("73.33333333333333%"),
    minWidth: wp("73.33333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("4.098360655737707%")
  },
  Text_153_1695: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1696: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_153_1696: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_1697: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.661202185792348%")
  },
  View_153_1698: {
    width: wp("89.06666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("2.732240437158481%"),
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
  View_153_1699: {
    width: wp("48.266666666666666%"),
    minWidth: wp("48.266666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("4.098360655737707%")
  },
  Text_153_1699: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1700: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_153_1700: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_1701: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.800000000000004%"),
    top: hp("9.289617486338798%")
  },
  Text_153_1701: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_1702: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.00000000000001%"),
    top: hp("22.950819672131146%")
  },
  Text_153_1702: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_1703: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("39.48087431693989%")
  },
  View_153_1704: {
    width: wp("89.06666666666668%"),
    height: hp("5.46448087431694%"),
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
  View_153_1705: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4.37158469945355%")
  },
  Text_153_1705: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1706: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_153_1706: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_1707: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("50%")
  },
  View_153_1708: {
    width: wp("89.06666666666668%"),
    height: hp("16.666666666666664%"),
    top: hp("2.868852459016388%"),
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
  View_153_1709: {
    width: wp("51.733333333333334%"),
    minWidth: wp("51.733333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4.371584699453557%")
  },
  Text_153_1709: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1710: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_153_1710: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
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
