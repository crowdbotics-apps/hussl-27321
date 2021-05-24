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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32de/7700/df3f234c4bb4a96e33400fb285e751f2"
        }}
        style={styles.ImageBackground_160_1539}
      />
      <View style={styles.View_160_1540}>
        <View style={styles.View_160_1541} />
        <View style={styles.View_160_1542}>
          <View style={styles.View_160_1543}>
            <Text style={styles.Text_160_1543}>
              Our team was inspired by the seven skills of highly effective
              programmers created by the TechLead. We wanted to provide our own
              take on the topic.
            </Text>
          </View>
          <View style={styles.View_160_1544}>
            <Text style={styles.Text_160_1544}>Heather Jones</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_160_1545}>
        <View style={styles.View_160_1546} />
        <View style={styles.View_160_1547}>
          <View style={styles.View_160_1548}>
            <Text style={styles.Text_160_1548}>
              Our team was inspired by the seven skills of highly effective
              programmers created by the TechLead. We wanted to provide our own
              take on the topic.
            </Text>
          </View>
          <View style={styles.View_160_1549}>
            <Text style={styles.Text_160_1549}>Heather Jones</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_160_1550}>
        <View style={styles.View_160_1551} />
        <View style={styles.View_160_1552}>
          <View style={styles.View_160_1553}>
            <Text style={styles.Text_160_1553}>
              Our team was inspired by the seven skills of highly effective
              programmers created by the TechLead. We wanted to provide our own
              take on the topic.
            </Text>
          </View>
          <View style={styles.View_160_1554}>
            <Text style={styles.Text_160_1554}>Heather Jones</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_160_1555}>
        <View style={styles.View_160_1556} />
        <View style={styles.View_160_1557}>
          <View style={styles.View_160_1558}>
            <Text style={styles.Text_160_1558}>
              Hmm... Who do you think this product is for?
            </Text>
          </View>
          <View style={styles.View_160_1559}>
            <Text style={styles.Text_160_1559}>Heather Jones</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_160_1560}>
        <View style={styles.View_160_1561} />
        <View style={styles.View_160_1562}>
          <View style={styles.View_160_1563}>
            <Text style={styles.Text_160_1563}>
              Hmm... Who do you think this product is for?
            </Text>
          </View>
          <View style={styles.View_160_1564}>
            <Text style={styles.Text_160_1564}>Heather Jones</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_160_1565}>
        <View style={styles.View_160_1566}>
          <Text style={styles.Text_160_1566}>Diaclean</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("160_1502"))
        }
      >
        <View style={styles.View_160_1567}>
          <View style={styles.View_160_1568} />
          <View style={styles.View_160_1569}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec9/cd4d/d06dc5e29c86ed09dfcf167693416521"
              }}
              style={styles.ImageBackground_160_1570}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_160_1573}>
        <View style={styles.View_160_1574} />
      </View>
      <View style={styles.View_160_1575}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4efe/2dd7/436bef2455d36775bd495ab7c693f1e1"
          }}
          style={styles.ImageBackground_160_1576}
        />
      </View>
      <View style={styles.View_160_1580}>
        <View style={styles.View_160_1581} />
        <View style={styles.View_160_1582}>
          <Text style={styles.Text_160_1582}>Type your message...</Text>
        </View>
        <View style={styles.View_160_1583} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97b3/08f5/ec79f3e39988503e9d5c4a1eb3789bbd"
          }}
          style={styles.ImageBackground_160_1584}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_160_1539: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("104.0983606557377%"),
    minHeight: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896176%")
  },
  View_160_1540: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%"),
    top: hp("81.69398907103826%")
  },
  View_160_1541: {
    width: wp("74.66666666666667%"),
    height: hp("15.300546448087433%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_160_1542: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    height: hp("11.70845344418385%"),
    minHeight: hp("11.70845344418385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.6393317550909217%")
  },
  View_160_1543: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    minHeight: hp("9.112825028883304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  Text_160_1543: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_1544: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_1544: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1545: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("33.060109289617486%")
  },
  View_160_1546: {
    width: wp("74.66666666666667%"),
    height: hp("15.300546448087433%"),
    top: hp("0%"),
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
  View_160_1547: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    height: hp("11.70845344418385%"),
    minHeight: hp("11.70845344418385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999984%"),
    top: hp("1.6393359241589849%")
  },
  View_160_1548: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    minHeight: hp("9.112825028883304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005456%")
  },
  Text_160_1548: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_1549: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_1549: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1550: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%"),
    top: hp("51.229508196721305%")
  },
  View_160_1551: {
    width: wp("74.66666666666667%"),
    height: hp("15.300546448087433%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_160_1552: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    height: hp("11.70845344418385%"),
    minHeight: hp("11.70845344418385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.6393317550909359%")
  },
  View_160_1553: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    minHeight: hp("9.112825028883304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  Text_160_1553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_1554: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_1554: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1555: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("19.808743169398905%")
  },
  View_160_1556: {
    width: wp("74.66666666666667%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
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
  View_160_1557: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999984%"),
    top: hp("1.6393359241589849%")
  },
  View_160_1558: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005456%")
  },
  Text_160_1558: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_1559: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_1559: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1560: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("68.30601092896174%")
  },
  View_160_1561: {
    width: wp("74.66666666666667%"),
    height: hp("11.612021857923498%"),
    top: hp("0%"),
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
  View_160_1562: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999984%"),
    top: hp("1.6393317550909359%")
  },
  View_160_1563: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  Text_160_1563: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_1564: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_1564: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_160_1565: {
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
  View_160_1566: {
    width: wp("83.67285970052083%"),
    minWidth: wp("83.67285970052083%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_160_1566: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_1567: {
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
  View_160_1568: {
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
  View_160_1569: {
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
  ImageBackground_160_1570: {
    width: wp("3.2006797790527344%"),
    height: hp("1.6396565515486918%"),
    top: hp("0.819480354017248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.599609375%")
  },
  View_160_1573: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("8.333333333333332%")
  },
  View_160_1574: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 196, 51, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_160_1575: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("9.426229508196721%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_160_1576: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%")
  },
  View_160_1580: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("101.50273224043715%")
  },
  View_160_1581: {
    width: wp("89.06666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
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
  View_160_1582: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999999%"),
    top: hp("1.3661202185792547%")
  },
  Text_160_1582: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_1583: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 196, 51, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_160_1584: {
    width: wp("4.2724248250325525%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.60000000000001%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
