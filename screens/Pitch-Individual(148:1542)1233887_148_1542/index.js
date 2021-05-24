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
      <View style={styles.View_183_269} />
      <View style={styles.View_183_270}>
        <View style={styles.View_183_271}>
          <Text style={styles.Text_183_271}>Airbnb Pitch</Text>
        </View>
      </View>
      <View style={styles.View_183_272} />
      <View style={styles.View_183_273}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8751/a2fc/93d5b91ba425618f10742adc180cfee4"
          }}
          style={styles.ImageBackground_183_274}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8b3/5b71/4139f4adc0e61620c91544f2e4f5739d"
          }}
          style={styles.ImageBackground_183_275}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a32/dd15/e3b575096780500ffc5846273955e2a9"
        }}
        style={styles.ImageBackground_183_276}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7995/6b42/a18784a258487a55563fed4f5ce87b59"
        }}
        style={styles.ImageBackground_183_278}
      />
      <View style={styles.View_183_279}>
        <Text style={styles.Text_183_279}>3d</Text>
      </View>
      <View style={styles.View_183_280}>
        <View style={styles.View_183_281}>
          <View style={styles.View_183_282}>
            <Text style={styles.Text_183_282}>Airbnb problem</Text>
          </View>
        </View>
        <View style={styles.View_183_283}>
          <Text style={styles.Text_183_283}>Solving</Text>
        </View>
      </View>
      <View style={styles.View_183_284}>
        <View style={styles.View_183_285}>
          <View style={styles.View_183_286}>
            <Text style={styles.Text_183_286}>
              A web platform where users can rent out their space to host
              travellers to: save money, make money, share culture.
            </Text>
          </View>
        </View>
        <View style={styles.View_183_287}>
          <Text style={styles.Text_183_287}>Pitch Description</Text>
        </View>
      </View>
      <View style={styles.View_183_288}>
        <View style={styles.View_183_289} />
        <View style={styles.View_183_290}>
          <Text style={styles.Text_183_290}>CONSUMER</Text>
        </View>
      </View>
      <View style={styles.View_183_291}>
        <View style={styles.View_183_292} />
        <View style={styles.View_183_293}>
          <Text style={styles.Text_183_293}>PITCH</Text>
        </View>
      </View>
      <View style={styles.View_183_294}>
        <View style={styles.View_183_295}>
          <Text style={styles.Text_183_295}>John Tan</Text>
        </View>
        <View style={styles.View_183_296}>
          <Text style={styles.Text_183_296}>POSTED BY</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb16/d6a8/1b598e9b811255e54a62f90de8a3a35f"
          }}
          style={styles.ImageBackground_183_297}
        />
      </View>
      <View style={styles.View_183_298}>
        <View style={styles.View_183_299}>
          <View style={styles.View_183_300}>
            <Text style={styles.Text_183_300}>325</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4be0/3b86/2d29a2feddfffbaab8f5cf884f6eec4f"
          }}
          style={styles.ImageBackground_183_301}
        />
      </View>
      <View style={styles.View_223_2592}>
        <View style={styles.View_223_2593} />
        <View style={styles.View_223_2594}>
          <View style={styles.View_223_2595}>
            <Text style={styles.Text_223_2595}>Submitted a pitch</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_223_2596}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d2f/2a52/e57192ff36baaa0264d626b57c5201da"
          }}
          style={styles.ImageBackground_223_2597}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("177.04918032786884%") },
  View_183_269: {
    width: wp("100%"),
    height: hp("170.21857923497268%"),
    top: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_183_270: {
    width: wp("83.67285970052083%"),
    height: hp("3.415300546448088%"),
    top: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%")
  },
  View_183_271: {
    width: wp("83.67285970052083%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_183_271: {
    color: "rgba(8, 31, 50, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_272: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_183_273: {
    width: wp("100%"),
    height: hp("76.7639660444416%"),
    top: hp("49.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_183_274: {
    width: wp("100%"),
    height: hp("76.7639660444416%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_183_275: {
    width: wp("15.673982747395835%"),
    height: hp("8.029704276329833%"),
    top: hp("34.367137137657956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.3197265625%")
  },
  ImageBackground_183_276: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_183_278: {
    width: wp("100%"),
    height: hp("34.97267759562842%"),
    top: hp("127.99347424116291%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_279: {
    width: wp("20.8%"),
    top: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%")
  },
  Text_183_279: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_280: {
    width: wp("25.6%"),
    height: hp("5.327868852459016%"),
    top: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_183_281: {
    width: wp("25.6%"),
    height: hp("2.459016393442623%"),
    top: hp("2.8688524590163915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_282: {
    width: wp("25.6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_183_282: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_283: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_183_283: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_284: {
    width: wp("79.2%"),
    height: hp("12.978142076502733%"),
    top: hp("29.098360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_183_285: {
    width: wp("79.2%"),
    height: hp("10.10928961748634%"),
    top: hp("2.8688524590163986%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_286: {
    width: wp("79.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_183_286: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_287: {
    width: wp("30.4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_183_287: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_183_288: {
    width: wp("20.8%"),
    height: hp("3.1420765027322406%"),
    top: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%")
  },
  View_183_289: {
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
  View_183_290: {
    width: wp("15.733333333333333%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  Text_183_290: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_291: {
    width: wp("13.333333333333334%"),
    height: hp("3.1420765027322406%"),
    top: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_183_292: {
    width: wp("13.333333333333334%"),
    height: hp("3.1420765027322406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 64, 89, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_183_293: {
    width: wp("8%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  Text_183_293: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_294: {
    width: wp("25.333333333333336%"),
    height: hp("4.371584699453552%"),
    top: hp("41.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%")
  },
  View_183_295: {
    width: wp("12.533333333333333%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000001%")
  },
  Text_183_295: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_296: {
    width: wp("15.733333333333333%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000001%")
  },
  Text_183_296: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_183_297: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_298: {
    width: wp("12.201302083333333%"),
    height: hp("3.415300546448088%"),
    top: hp("43.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.66666666666667%")
  },
  View_183_299: {
    width: wp("5.6000000000000005%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333337%")
  },
  View_183_300: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_183_300: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_183_301: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_223_2592: {
    width: wp("89.06666666666668%"),
    height: hp("6.147540983606557%"),
    top: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%")
  },
  View_223_2593: {
    width: wp("89.06666666666668%"),
    height: hp("6.147540983606557%"),
    top: hp("0%"),
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
  View_223_2594: {
    width: wp("31.2%"),
    height: hp("1.7759562841530054%"),
    top: hp("2.1857923497267766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666667%")
  },
  View_223_2595: {
    width: wp("31.2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_223_2595: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_223_2596: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_223_2597: {
    width: wp("3.2006797790527344%"),
    height: hp("1.6396565515486918%"),
    top: hp("0.8194803540172471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5996744791666657%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
