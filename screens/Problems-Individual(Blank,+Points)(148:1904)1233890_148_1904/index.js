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
        style={styles.ImageBackground_148_1905}
      />
      <View style={styles.View_148_1906} />
      <View style={styles.View_148_1907}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ec9/cd4d/d06dc5e29c86ed09dfcf167693416521"
          }}
          style={styles.ImageBackground_148_1908}
        />
      </View>
      <View style={styles.View_148_1911}>
        <View style={styles.View_148_1912}>
          <Text style={styles.Text_148_1912}>Airbnb Problem</Text>
        </View>
      </View>
      <View style={styles.View_153_1593}>
        <View style={styles.View_148_1913}>
          <Text style={styles.Text_148_1913}>Solutions</Text>
        </View>
        <View style={styles.View_148_1914}>
          <Text style={styles.Text_148_1914}>
            Be the first to submit a solution!
          </Text>
        </View>
        <View style={styles.View_148_1959}>
          <View style={styles.View_148_1960} />
          <View style={styles.View_148_1961}>
            <Text style={styles.Text_148_1961}>Submit a solution</Text>
          </View>
          <View style={styles.View_148_1962}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed36/8aab/0695908756b9e693832d437c1a44d6eb"
              }}
              style={styles.ImageBackground_148_1963}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_153_633}>
        <View style={styles.View_I153_633_148_2006} />
        <View style={styles.View_I153_633_148_2007}>
          <Text style={styles.Text_I153_633_148_2007}>3d</Text>
        </View>
        <View style={styles.View_I153_633_153_400}>
          <View style={styles.View_I153_633_148_2010}>
            <Text style={styles.Text_I153_633_148_2010}>
              Price is important concern for customers booking travel online.
              Hotels leave you disconnected from the city and its culture. No
              easy way exists to book a room with a local or become a host.
            </Text>
          </View>
          <View style={styles.View_I153_633_148_2011}>
            <Text style={styles.Text_I153_633_148_2011}>Problem</Text>
          </View>
        </View>
        <View style={styles.View_I153_633_153_399}>
          <View style={styles.View_I153_633_148_2021} />
          <View style={styles.View_I153_633_148_2022}>
            <Text style={styles.Text_I153_633_148_2022}>CONSUMER</Text>
          </View>
        </View>
        <View style={styles.View_I153_633_148_2035}>
          <View style={styles.View_I153_633_148_2036}>
            <View style={styles.View_I153_633_148_2037} />
            <View style={styles.View_I153_633_148_2038}>
              <Text style={styles.Text_I153_633_148_2038}>PROBLEM</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I153_633_153_830}>
          <View style={styles.View_I153_633_153_402}>
            <View style={styles.View_I153_633_148_2016}>
              <Text style={styles.Text_I153_633_148_2016}>Brian Chesky</Text>
            </View>
            <View style={styles.View_I153_633_148_2017}>
              <Text style={styles.Text_I153_633_148_2017}>POSTED BY</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb16/d6a8/1b598e9b811255e54a62f90de8a3a35f"
              }}
              style={styles.ImageBackground_I153_633_148_2018}
            />
          </View>
          <View style={styles.View_I153_633_153_403}>
            <View style={styles.View_I153_633_153_258}>
              <View style={styles.View_I153_633_153_259}>
                <Text style={styles.Text_I153_633_153_259}>2</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2cb/0a90/0571def78882de7849fffaf7fa4d9cab"
                }}
                style={styles.ImageBackground_I153_633_153_260}
              />
            </View>
            <View style={styles.View_I153_633_153_262}>
              <View style={styles.View_I153_633_153_263}>
                <Text style={styles.Text_I153_633_153_263}>325</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72fb/8e4d/eed175f4b2386d18fec4f397c5236392"
                }}
                style={styles.ImageBackground_I153_633_153_264}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_223_2578}>
        <View style={styles.View_223_2579} />
        <View style={styles.View_223_2580}>
          <View style={styles.View_223_2581}>
            <Text style={styles.Text_223_2581}>Submitted a problem</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_223_2588}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d2f/2a52/e57192ff36baaa0264d626b57c5201da"
          }}
          style={styles.ImageBackground_223_2589}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_148_1905: {
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
  View_148_1906: {
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
  View_148_1907: {
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
  ImageBackground_148_1908: {
    width: wp("3.2006797790527344%"),
    height: hp("1.6396565515486918%"),
    top: hp("0.8194803540172462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5996419270833329%")
  },
  View_148_1911: {
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
  View_148_1912: {
    width: wp("83.67285970052083%"),
    minWidth: wp("83.67285970052083%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_148_1912: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_153_1593: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("52.732240437158474%")
  },
  View_148_1913: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.092896174863391%")
  },
  Text_148_1913: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_148_1914: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("8.469945355191257%")
  },
  Text_148_1914: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_148_1959: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.666666666666664%"),
    top: hp("0%")
  },
  View_148_1960: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
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
  View_148_1961: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999994%"),
    top: hp("0%")
  },
  Text_148_1961: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1962: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_148_1963: {
    width: wp("2.8000000000000003%"),
    height: hp("1.4344262295081966%"),
    top: hp("0.23907103825136744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46666666666666856%")
  },
  View_153_633: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("36.33879781420765%"),
    minHeight: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("18.169398907103826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I153_633_148_2006: {
    flexGrow: 1,
    width: wp("89.06666666666668%"),
    height: hp("32.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I153_633_148_2007: {
    flexGrow: 1,
    width: wp("20.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666666%"),
    top: hp("2.7322404371584703%")
  },
  Text_I153_633_148_2007: {
    color: "rgba(110, 121, 140, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_633_153_400: {
    flexGrow: 1,
    width: wp("79.2%"),
    height: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("7.513661202185791%")
  },
  View_I153_633_148_2010: {
    width: wp("79.2%"),
    top: hp("2.8688524590163915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I153_633_148_2010: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_633_148_2011: {
    width: wp("15.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I153_633_148_2011: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_I153_633_153_399: {
    flexGrow: 1,
    width: wp("20.8%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.26666666666667%"),
    top: hp("2.185792349726775%")
  },
  View_I153_633_148_2021: {
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
  View_I153_633_148_2022: {
    width: wp("15.733333333333333%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666607%")
  },
  Text_I153_633_148_2022: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_633_148_2035: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("2.185792349726775%")
  },
  View_I153_633_148_2036: {
    width: wp("18.666666666666668%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_633_148_2037: {
    width: wp("18.666666666666668%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(212, 73, 76, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I153_633_148_2038: {
    width: wp("13.066666666666665%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%")
  },
  Text_I153_633_148_2038: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_633_153_830: {
    flexGrow: 1,
    width: wp("79.606982421875%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("25.273224043715842%")
  },
  View_I153_633_153_402: {
    width: wp("28.26666666666667%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_633_148_2016: {
    width: wp("18.666666666666668%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000001%")
  },
  Text_I153_633_148_2016: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I153_633_148_2017: {
    width: wp("15.733333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000001%")
  },
  Text_I153_633_148_2017: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_633_148_2018: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_633_153_403: {
    width: wp("30.80698038736979%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.800000000000004%")
  },
  View_I153_633_153_258: {
    width: wp("10.922666422526042%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.884309895833326%")
  },
  View_I153_633_153_259: {
    width: wp("2.7306666056315105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.191992187500006%")
  },
  Text_I153_633_153_259: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_633_153_260: {
    width: wp("5.461333211263021%"),
    height: hp("2.7978141451142524%"),
    top: hp("0.6994528848616852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_633_153_262: {
    width: wp("15.617645263671875%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I153_633_153_263: {
    width: wp("7.168000284830729%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.449641927083334%")
  },
  Text_I153_633_153_263: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I153_633_153_264: {
    width: wp("5.7189783732096355%"),
    height: hp("2.7978141451142524%"),
    top: hp("0.6994528848616852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_223_2578: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("4.508196721311475%")
  },
  View_223_2579: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_223_2580: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666667%"),
    top: hp("2.1857923497267766%")
  },
  View_223_2581: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_223_2581: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_223_2588: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("5.8743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_223_2589: {
    width: wp("3.2006797790527344%"),
    height: hp("1.6396565515486918%"),
    top: hp("0.8194803540172471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.59964192708334%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
