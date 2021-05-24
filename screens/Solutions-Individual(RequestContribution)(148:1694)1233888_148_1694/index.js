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
      <View style={styles.View_148_1695} />
      <View style={styles.View_148_1696} />
      <View style={styles.View_148_1697}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec9/cd4d/d06dc5e29c86ed09dfcf167693416521"
          }}
          style={styles.ImageBackground_148_1698}
        />
      </View>
      <View style={styles.View_148_1701}>
        <View style={styles.View_148_1702}>
          <Text style={styles.Text_148_1702}>Airbnb Solution</Text>
        </View>
      </View>
      <View style={styles.View_153_1437}>
        <View style={styles.View_148_1703}>
          <Text style={styles.Text_148_1703}>Pitch</Text>
        </View>
        <View style={styles.View_148_1704}>
          <View style={styles.View_148_1705} />
          <View style={styles.View_148_1706}>
            <Text style={styles.Text_148_1706}>Submit a pitch</Text>
          </View>
          <View style={styles.View_148_1707}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed36/8aab/0695908756b9e693832d437c1a44d6eb"
              }}
              style={styles.ImageBackground_148_1708}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb9/f435/3ab83c8680a63ee43b900e966273bab2"
        }}
        style={styles.ImageBackground_148_1712}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd5/a5d3/ce6a8d287dbfc2605dc2542055652e86"
        }}
        style={styles.ImageBackground_148_1713}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d0e/79e0/324298e846ecf9f67053696cd05220dc"
        }}
        style={styles.ImageBackground_148_1714}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9047/76af/c267002c96fd671fb735b63576854ae9"
        }}
        style={styles.ImageBackground_148_1715}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e57/2066/85fc15c2e80a76c193a8634f090c51c7"
        }}
        style={styles.ImageBackground_148_1716}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e57/2066/85fc15c2e80a76c193a8634f090c51c7"
        }}
        style={styles.ImageBackground_148_1717}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e57/2066/85fc15c2e80a76c193a8634f090c51c7"
        }}
        style={styles.ImageBackground_148_1718}
      />
      <View style={styles.View_153_1495}>
        <View style={styles.View_153_1496} />
        <View style={styles.View_153_1497}>
          <Text style={styles.Text_153_1497}>3d</Text>
        </View>
        <View style={styles.View_153_1498}>
          <View style={styles.View_153_1499}>
            <View style={styles.View_153_1500}>
              <Text style={styles.Text_153_1500}>Airbnb problem</Text>
            </View>
          </View>
          <View style={styles.View_153_1501}>
            <Text style={styles.Text_153_1501}>Solving</Text>
          </View>
        </View>
        <View style={styles.View_153_1502}>
          <View style={styles.View_153_1503}>
            <View style={styles.View_153_1504}>
              <Text style={styles.Text_153_1504}>
                A web platform where users can rent out their space to host
                travellers to: save money, make money, share culture.
              </Text>
            </View>
          </View>
          <View style={styles.View_153_1505}>
            <Text style={styles.Text_153_1505}>Description</Text>
          </View>
        </View>
        <View style={styles.View_153_1506}>
          <View style={styles.View_153_1507} />
          <View style={styles.View_153_1508}>
            <Text style={styles.Text_153_1508}>CONSUMER</Text>
          </View>
        </View>
        <View style={styles.View_153_1509}>
          <View style={styles.View_153_1510}>
            <View style={styles.View_153_1511} />
            <View style={styles.View_153_1512}>
              <Text style={styles.Text_153_1512}>SOLUTION</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_153_1513}>
          <View style={styles.View_153_1514}>
            <View style={styles.View_153_1515}>
              <Text style={styles.Text_153_1515}>John Tan</Text>
            </View>
            <View style={styles.View_153_1516}>
              <Text style={styles.Text_153_1516}>POSTED BY</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb16/d6a8/1b598e9b811255e54a62f90de8a3a35f"
              }}
              style={styles.ImageBackground_153_1517}
            />
          </View>
          <View style={styles.View_153_1518}>
            <View style={styles.View_153_1519}>
              <Text style={styles.Text_153_1519}>3</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58e8/be0f/85d28dd1a70f57c471e6309243a3a8ce"
              }}
              style={styles.ImageBackground_153_1520}
            />
          </View>
          <View style={styles.View_153_1521}>
            <View style={styles.View_153_1522}>
              <Text style={styles.Text_153_1522}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72fb/8e4d/eed175f4b2386d18fec4f397c5236392"
              }}
              style={styles.ImageBackground_153_1523}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4e0/b332/b25f81db1f7593eea91e16db606b293e"
        }}
        style={styles.ImageBackground_153_1524}
      />
      <View style={styles.View_153_1571}>
        <View style={styles.View_153_1565}>
          <View style={styles.View_153_1566}>
            <Text style={styles.Text_153_1566}>325</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4955/fdb3/60eadf0bfa3c9a8d7268395c89e69b60"
          }}
          style={styles.ImageBackground_153_1570}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_148_1695: {
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
  View_148_1696: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("8.333333333333332%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_148_1697: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("9.426229508196721%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_148_1698: {
    width: wp("3.2006797790527344%"),
    height: hp("1.6396565515486918%"),
    top: hp("0.819484523085297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5996419270833329%")
  },
  View_148_1701: {
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
  View_148_1702: {
    width: wp("83.67285970052083%"),
    minWidth: wp("83.67285970052083%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_148_1702: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1437: {
    width: wp("87.46666666666667%"),
    minWidth: wp("87.46666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("54.78142076502732%")
  },
  View_148_1703: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_148_1703: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_148_1704: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666667%"),
    top: hp("0%")
  },
  View_148_1705: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
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
  View_148_1706: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333329%"),
    top: hp("0%")
  },
  Text_148_1706: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1707: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_148_1708: {
    width: wp("2.8000000000000003%"),
    height: hp("1.4344262295081966%"),
    top: hp("0.23907103825137455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46666666666666856%")
  },
  ImageBackground_148_1712: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("59.42622950819673%")
  },
  ImageBackground_148_1713: {
    width: wp("69.06666666666666%"),
    minWidth: wp("69.06666666666666%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("59.42622950819673%")
  },
  ImageBackground_148_1714: {
    width: wp("9.6%"),
    height: hp("3.1896497382492317%"),
    top: hp("44.83230674201673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%")
  },
  ImageBackground_148_1715: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("86.20218579234972%")
  },
  ImageBackground_148_1716: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("86.20218579234972%")
  },
  ImageBackground_148_1717: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("86.20218579234972%")
  },
  ImageBackground_148_1718: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.400000000000006%"),
    top: hp("86.20218579234972%")
  },
  View_153_1495: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("16.530054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_153_1496: {
    width: wp("89.06666666666668%"),
    height: hp("34.42622950819672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(102, 153, 204, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_153_1497: {
    width: wp("20.8%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%")
  },
  Text_153_1497: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1498: {
    width: wp("25.6%"),
    height: hp("5.327868852459016%"),
    top: hp("7.513661202185791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333334%")
  },
  View_153_1499: {
    width: wp("25.6%"),
    height: hp("2.459016393442623%"),
    top: hp("2.8688524590163986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1500: {
    width: wp("25.6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_153_1500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1501: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_153_1501: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_1502: {
    width: wp("79.2%"),
    height: hp("12.978142076502733%"),
    top: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333334%")
  },
  View_153_1503: {
    width: wp("79.2%"),
    height: hp("10.10928961748634%"),
    top: hp("2.8688524590163915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1504: {
    width: wp("79.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_153_1504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1505: {
    width: wp("20.533333333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_153_1505: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_153_1506: {
    width: wp("20.8%"),
    height: hp("3.1420765027322406%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799999999999997%")
  },
  View_153_1507: {
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
  View_153_1508: {
    width: wp("15.733333333333333%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.400000000000002%")
  },
  Text_153_1508: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1509: {
    width: wp("19.2%"),
    height: hp("3.1420765027322406%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333334%")
  },
  View_153_1510: {
    width: wp("19.2%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1511: {
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
  View_153_1512: {
    width: wp("14.133333333333335%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  Text_153_1512: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1513: {
    width: wp("79.627001953125%"),
    height: hp("4.371584699453552%"),
    top: hp("27.732240437158467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333334%")
  },
  View_153_1514: {
    width: wp("25.333333333333336%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1515: {
    width: wp("12.533333333333333%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%")
  },
  Text_153_1515: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1516: {
    width: wp("15.733333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%")
  },
  Text_153_1516: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_153_1517: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1518: {
    width: wp("9.846250406901042%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.78072916666667%")
  },
  View_153_1519: {
    width: wp("2.3893333435058595%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.456901041666669%")
  },
  Text_153_1519: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_153_1520: {
    width: wp("4.726287841796875%"),
    height: hp("2.7978141451142524%"),
    top: hp("0.6994528848616781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1521: {
    width: wp("15.617645263671875%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.70175781249999%")
  },
  View_153_1522: {
    width: wp("7.167999776204427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.449674479166667%")
  },
  Text_153_1522: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_153_1523: {
    width: wp("5.7189783732096355%"),
    height: hp("2.7978141451142524%"),
    top: hp("0.6994528848616781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_153_1524: {
    width: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    top: hp("69.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%")
  },
  View_153_1571: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666666%"),
    top: hp("87.43169398907104%")
  },
  View_153_1565: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%")
  },
  View_153_1566: {
    width: wp("6.666666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_153_1566: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_153_1570: {
    width: wp("6.4%"),
    height: hp("3.130980528117529%"),
    top: hp("0%"),
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
