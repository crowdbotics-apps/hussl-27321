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
      <View style={styles.View_153_1715} />
      <View style={styles.View_153_1716}>
        <View style={styles.View_153_1717}>
          <Text style={styles.Text_153_1717}>Submit a pitch</Text>
        </View>
      </View>
      <View style={styles.View_153_1718}>
        <View style={styles.View_153_1719} />
        <View style={styles.View_153_1720}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec9/cd4d/d06dc5e29c86ed09dfcf167693416521"
            }}
            style={styles.ImageBackground_153_1721}
          />
        </View>
      </View>
      <View style={styles.View_153_1724}>
        <View style={styles.View_I153_1724_50_1492} />
        <View style={styles.View_I153_1724_50_1493}>
          <Text style={styles.Text_I153_1724_50_1493}>Submit pitch </Text>
        </View>
      </View>
      <View style={styles.View_153_1740}>
        <View style={styles.View_153_1741} />
        <View style={styles.View_153_1742}>
          <Text style={styles.Text_153_1742}>Enter your pitch title</Text>
        </View>
        <View style={styles.View_153_1743}>
          <Text style={styles.Text_153_1743}>Title</Text>
        </View>
      </View>
      <View style={styles.View_153_1744}>
        <View style={styles.View_153_1745} />
        <View style={styles.View_153_1746}>
          <Text style={styles.Text_153_1746}>
            Enter your full pitch description
          </Text>
        </View>
        <View style={styles.View_153_1747}>
          <Text style={styles.Text_153_1747}>Description</Text>
        </View>
      </View>
      <View style={styles.View_160_1661}>
        <Text style={styles.Text_160_1661}>
          You are submitting a pitch for...
        </Text>
      </View>
      <View style={styles.View_160_1662}>
        <View style={styles.View_160_1663}>
          <Text style={styles.Text_160_1663}>Airbnb solution</Text>
        </View>
      </View>
      <View style={styles.View_160_1664}>
        <View style={styles.View_I160_1664_153_1184} />
        <View style={styles.View_I160_1664_153_1185}>
          <Text style={styles.Text_I160_1664_153_1185}>3d</Text>
        </View>
        <View style={styles.View_I160_1664_153_1190}>
          <View style={styles.View_I160_1664_153_1191}>
            <View style={styles.View_I160_1664_153_1192}>
              <Text style={styles.Text_I160_1664_153_1192}>Airbnb problem</Text>
            </View>
          </View>
          <View style={styles.View_I160_1664_153_1193}>
            <Text style={styles.Text_I160_1664_153_1193}>Solving</Text>
          </View>
        </View>
        <View style={styles.View_I160_1664_153_1194}>
          <View style={styles.View_I160_1664_153_1195}>
            <View style={styles.View_I160_1664_153_1196}>
              <Text style={styles.Text_I160_1664_153_1196}>
                A web platform where users can rent out their space to host
                travellers to: save money, make money, share culture.
              </Text>
            </View>
          </View>
          <View style={styles.View_I160_1664_153_1197}>
            <Text style={styles.Text_I160_1664_153_1197}>Description</Text>
          </View>
        </View>
        <View style={styles.View_I160_1664_153_1198}>
          <View style={styles.View_I160_1664_153_1199} />
          <View style={styles.View_I160_1664_153_1200}>
            <Text style={styles.Text_I160_1664_153_1200}>CONSUMER</Text>
          </View>
        </View>
        <View style={styles.View_I160_1664_153_1212}>
          <View style={styles.View_I160_1664_153_1213}>
            <View style={styles.View_I160_1664_153_1214} />
            <View style={styles.View_I160_1664_153_1215}>
              <Text style={styles.Text_I160_1664_153_1215}>SOLUTION</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I160_1664_153_1216}>
          <View style={styles.View_I160_1664_153_1217}>
            <View style={styles.View_I160_1664_153_1218}>
              <Text style={styles.Text_I160_1664_153_1218}>John Tan</Text>
            </View>
            <View style={styles.View_I160_1664_153_1219}>
              <Text style={styles.Text_I160_1664_153_1219}>POSTED BY</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb16/d6a8/1b598e9b811255e54a62f90de8a3a35f"
              }}
              style={styles.ImageBackground_I160_1664_153_1220}
            />
          </View>
          <View style={styles.View_I160_1664_153_1224}>
            <View style={styles.View_I160_1664_153_1225}>
              <Text style={styles.Text_I160_1664_153_1225}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72fb/8e4d/eed175f4b2386d18fec4f397c5236392"
              }}
              style={styles.ImageBackground_I160_1664_153_1226}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_153_1715: {
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
  View_153_1716: {
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
  View_153_1717: {
    width: wp("83.67285970052083%"),
    minWidth: wp("83.67285970052083%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_153_1717: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1718: {
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
  View_153_1719: {
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
  View_153_1720: {
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
  ImageBackground_153_1721: {
    width: wp("3.2006797790527344%"),
    height: hp("1.6396565515486918%"),
    top: hp("0.8194886921533477%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5996744791666675%")
  },
  View_153_1724: {
    width: wp("84.8%"),
    minWidth: wp("84.8%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("98.224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_1724_50_1492: {
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
  View_I153_1724_50_1493: {
    flexGrow: 1,
    width: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.22005208333333%"),
    top: hp("2.322404371584696%")
  },
  Text_I153_1724_50_1493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_153_1740: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("64.89071038251366%")
  },
  View_153_1741: {
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
  View_153_1742: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4.371584699453564%")
  },
  Text_153_1742: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1743: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_153_1743: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_1744: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("75.40983606557377%")
  },
  View_153_1745: {
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
  View_153_1746: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4.37158469945355%")
  },
  Text_153_1746: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1747: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0%")
  },
  Text_153_1747: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1661: {
    width: wp("55.733333333333334%"),
    minWidth: wp("55.733333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("18.169398907103826%")
  },
  Text_160_1661: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1662: {
    width: wp("44.266666666666666%"),
    minWidth: wp("44.266666666666666%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("21.03825136612022%")
  },
  View_160_1663: {
    width: wp("44.266666666666666%"),
    minWidth: wp("44.266666666666666%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_1663: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_1664: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("25.546448087431695%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_1664_153_1184: {
    flexGrow: 1,
    width: wp("89.06666666666668%"),
    height: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 153, 204, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I160_1664_153_1185: {
    flexGrow: 1,
    width: wp("20.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666666%"),
    top: hp("2.7322404371584668%")
  },
  Text_I160_1664_153_1185: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_1664_153_1190: {
    flexGrow: 1,
    width: wp("25.6%"),
    height: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("7.513661202185791%")
  },
  View_I160_1664_153_1191: {
    width: wp("25.6%"),
    height: hp("2.459016393442623%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I160_1664_153_1192: {
    width: wp("25.6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I160_1664_153_1192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_1664_153_1193: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I160_1664_153_1193: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_I160_1664_153_1194: {
    flexGrow: 1,
    width: wp("79.2%"),
    height: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("15.027322404371585%")
  },
  View_I160_1664_153_1195: {
    width: wp("79.2%"),
    height: hp("10.10928961748634%"),
    top: hp("2.868852459016388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I160_1664_153_1196: {
    width: wp("79.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I160_1664_153_1196: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_1664_153_1197: {
    width: wp("20.533333333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I160_1664_153_1197: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_I160_1664_153_1198: {
    flexGrow: 1,
    width: wp("20.8%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799999999999997%"),
    top: hp("2.1857923497267713%")
  },
  View_I160_1664_153_1199: {
    width: wp("20.8%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 196, 51, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I160_1664_153_1200: {
    width: wp("15.733333333333333%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%")
  },
  Text_I160_1664_153_1200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_1664_153_1212: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.1857923497267713%")
  },
  View_I160_1664_153_1213: {
    width: wp("19.2%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I160_1664_153_1214: {
    width: wp("19.2%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(91, 185, 142, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I160_1664_153_1215: {
    width: wp("14.133333333333335%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%")
  },
  Text_I160_1664_153_1215: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_1664_153_1216: {
    flexGrow: 1,
    width: wp("79.6176513671875%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("27.322404371584692%")
  },
  View_I160_1664_153_1217: {
    width: wp("25.333333333333336%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I160_1664_153_1218: {
    width: wp("12.533333333333333%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000001%")
  },
  Text_I160_1664_153_1218: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I160_1664_153_1219: {
    width: wp("15.733333333333333%"),
    top: hp("0.13661202185793542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000001%")
  },
  Text_I160_1664_153_1219: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I160_1664_153_1220: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I160_1664_153_1224: {
    width: wp("15.617650349934895%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.99999999999999%")
  },
  View_I160_1664_153_1225: {
    width: wp("7.168000284830729%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.449674479166674%")
  },
  Text_I160_1664_153_1225: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I160_1664_153_1226: {
    width: wp("5.7189783732096355%"),
    height: hp("2.7978141451142524%"),
    top: hp("0.6994528848616852%"),
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
