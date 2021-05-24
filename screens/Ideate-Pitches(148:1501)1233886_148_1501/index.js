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
      <View style={styles.View_148_1502}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43af/2ef2/9b75ebfeb12e37663c6c79a90d755594"
          }}
          style={styles.ImageBackground_148_1503}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac9/07f7/58db07703d4148db7afd1dad2190ab91"
          }}
          style={styles.ImageBackground_148_1504}
        />
        <View style={styles.View_148_1505} />
        <View style={styles.View_148_1506}>
          <Text style={styles.Text_148_1506}>Weather Or Not</Text>
        </View>
      </View>
      <View style={styles.View_148_1512}>
        <Text style={styles.Text_148_1512}>Ideate</Text>
      </View>
      <View style={styles.View_148_1513} />
      <View style={styles.View_148_1514}>
        <Text style={styles.Text_148_1514}>Problems</Text>
      </View>
      <View style={styles.View_148_1515}>
        <Text style={styles.Text_148_1515}>Solutions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc3/87e2/862dc39a773f0f7b972a52865ecb5b45"
        }}
        style={styles.ImageBackground_148_1516}
      />
      <View style={styles.View_148_1519}>
        <Text style={styles.Text_148_1519}>Pitches</Text>
      </View>
      <View style={styles.View_148_1521}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8dc/08c2/f8cc0d9d84def972003b034707c678e4"
          }}
          style={styles.ImageBackground_148_1522}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac9/07f7/58db07703d4148db7afd1dad2190ab91"
          }}
          style={styles.ImageBackground_148_1523}
        />
        <View style={styles.View_148_1524} />
        <View style={styles.View_148_1525}>
          <Text style={styles.Text_148_1525}>Airbnb Pitch</Text>
        </View>
      </View>
      <View style={styles.View_148_2733}>
        <View style={styles.View_153_1228}>
          <View style={styles.View_148_2734}>
            <Text style={styles.Text_148_2734}>325</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_148_2735}
          />
        </View>
      </View>
      <View style={styles.View_160_10}>
        <View style={styles.View_160_1}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8dc/08c2/f8cc0d9d84def972003b034707c678e4"
            }}
            style={styles.ImageBackground_160_2}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac9/07f7/58db07703d4148db7afd1dad2190ab91"
            }}
            style={styles.ImageBackground_160_3}
          />
          <View style={styles.View_160_4} />
          <View style={styles.View_160_5}>
            <Text style={styles.Text_160_5}>Airbnb Pitch</Text>
          </View>
        </View>
        <View style={styles.View_160_6}>
          <View style={styles.View_160_7}>
            <View style={styles.View_160_8}>
              <Text style={styles.Text_160_8}>325</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
              }}
              style={styles.ImageBackground_160_9}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_148_1526}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43af/2ef2/9b75ebfeb12e37663c6c79a90d755594"
          }}
          style={styles.ImageBackground_148_1527}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac9/07f7/58db07703d4148db7afd1dad2190ab91"
          }}
          style={styles.ImageBackground_148_1528}
        />
        <View style={styles.View_148_1529} />
        <View style={styles.View_148_1530}>
          <Text style={styles.Text_148_1530}>Startup Pitch</Text>
        </View>
      </View>
      <View style={styles.View_148_1531}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d966/2907/91617e39abf45c0fd6d11522f0db3942"
          }}
          style={styles.ImageBackground_148_1532}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac9/07f7/58db07703d4148db7afd1dad2190ab91"
          }}
          style={styles.ImageBackground_148_1533}
        />
        <View style={styles.View_148_1534} />
        <View style={styles.View_148_1535}>
          <Text style={styles.Text_148_1535}>Uber Pitch</Text>
        </View>
      </View>
      <View style={styles.View_153_1682}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4be0/3b86/2d29a2feddfffbaab8f5cf884f6eec4f"
          }}
          style={styles.ImageBackground_153_1681}
        />
        <View style={styles.View_153_1230}>
          <Text style={styles.Text_153_1230}>325</Text>
        </View>
      </View>
      <View style={styles.View_148_1536}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b30c/1acf/e07550c1b7d0e6f4b872d4bbf84fd498"
          }}
          style={styles.ImageBackground_148_1537}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ac9/07f7/58db07703d4148db7afd1dad2190ab91"
          }}
          style={styles.ImageBackground_160_0}
        />
        <View style={styles.View_148_1539} />
        <View style={styles.View_148_1540}>
          <Text style={styles.Text_148_1540}>Engineer Solution</Text>
        </View>
      </View>
      <View style={styles.View_153_1526}>
        <View style={styles.View_153_1527}>
          <Text style={styles.Text_153_1527}>325</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
          }}
          style={styles.ImageBackground_153_1528}
        />
      </View>
      <View style={styles.View_153_1529}>
        <View style={styles.View_153_1530}>
          <Text style={styles.Text_153_1530}>325</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
          }}
          style={styles.ImageBackground_153_1531}
        />
      </View>
      <View style={styles.View_183_375}>
        <View style={styles.View_I183_375_183_2} />
        <View style={styles.View_I183_375_183_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/6b00/755138e92cdc74371060852ded59091b"
            }}
            style={styles.ImageBackground_I183_375_183_4}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_I183_375_183_16}
        />
        <View style={styles.View_I183_375_183_302}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_I183_375_183_303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_I183_375_183_304}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61e/e9c0/d187098a1363bad1307f336697e12e63"
        }}
        style={styles.ImageBackground_183_442}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_148_1502: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("92.89617486338798%")
  },
  ImageBackground_148_1503: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_148_1504: {
    width: wp("12.691526285807292%"),
    height: hp("6.501806498876686%"),
    top: hp("12.823002716231215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.454231770833335%")
  },
  View_148_1505: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("11.558766182654542%"),
    minHeight: hp("11.558766182654542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.408421917691243%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1506: {
    width: wp("23.972880045572918%"),
    minWidth: wp("23.972880045572918%"),
    minHeight: hp("2.8896915456636356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4678385416666666%"),
    top: hp("27.45206238793544%")
  },
  Text_148_1506: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_1512: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("12.158469945355192%")
  },
  Text_148_1512: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_148_1513: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("107.78688524590163%"),
    backgroundColor: "rgba(255, 196, 51, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_148_1514: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("20.62841530054645%")
  },
  Text_148_1514: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_1515: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("20.62841530054645%")
  },
  Text_148_1515: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_148_1516: {
    width: wp("14.133333333333335%"),
    height: hp("0%"),
    top: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  View_148_1519: {
    width: wp("14.666666666666666%"),
    top: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  Text_148_1519: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_1521: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("25.81967213114754%")
  },
  ImageBackground_148_1522: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_148_1523: {
    width: wp("12.691526285807292%"),
    height: hp("6.501806498876686%"),
    top: hp("12.82298603995902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.454231770833335%")
  },
  View_148_1524: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("11.558766182654542%"),
    minHeight: hp("11.558766182654542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.408421917691257%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1525: {
    width: wp("23.972880045572918%"),
    minWidth: wp("23.972880045572918%"),
    minHeight: hp("2.8896915456636356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4678385416666666%"),
    top: hp("27.452045711663253%")
  },
  Text_148_1525: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_2733: {
    width: wp("12.201285807291667%"),
    minWidth: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("53.14207650273224%")
  },
  View_153_1228: {
    width: wp("12.201285807291667%"),
    minWidth: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_148_2734: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.60130208333333%")
  },
  Text_148_2734: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_148_2735: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_10: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("92.89617486338798%")
  },
  View_160_1: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_160_2: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_160_3: {
    width: wp("12.691526285807292%"),
    height: hp("6.501806498876686%"),
    top: hp("12.823002716231215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.454231770833339%")
  },
  View_160_4: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("11.558766182654542%"),
    minHeight: hp("11.558766182654542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.408421917691243%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_160_5: {
    width: wp("23.972880045572918%"),
    minWidth: wp("23.972880045572918%"),
    minHeight: hp("2.8896915456636356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4678385416666657%"),
    top: hp("27.452045711663246%")
  },
  Text_160_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_160_6: {
    width: wp("12.201285807291667%"),
    minWidth: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333347%"),
    top: hp("27.322404371584696%")
  },
  View_160_7: {
    width: wp("12.201285807291667%"),
    minWidth: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_160_8: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333323%")
  },
  Text_160_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_160_9: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_148_1526: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("59.2896174863388%")
  },
  ImageBackground_148_1527: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_148_1528: {
    width: wp("12.691526285807292%"),
    height: hp("6.501806498876686%"),
    top: hp("12.82298603995902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.454231770833335%")
  },
  View_148_1529: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("11.558766182654542%"),
    minHeight: hp("11.558766182654542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.408421917691257%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1530: {
    width: wp("23.972880045572918%"),
    minWidth: wp("23.972880045572918%"),
    minHeight: hp("2.8896915456636356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4678385416666666%"),
    top: hp("27.45206238793544%")
  },
  Text_148_1530: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_148_1531: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("25.81967213114754%")
  },
  ImageBackground_148_1532: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_148_1533: {
    width: wp("12.691526285807292%"),
    height: hp("6.501806498876686%"),
    top: hp("12.82298603995902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.454231770833339%")
  },
  View_148_1534: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("11.558766182654542%"),
    minHeight: hp("11.558766182654542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.408421917691257%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1535: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("27.459016393442624%")
  },
  Text_148_1535: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_153_1682: {
    width: wp("12.201285807291667%"),
    minWidth: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("52.732240437158474%")
  },
  ImageBackground_153_1681: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1230: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333337%")
  },
  Text_153_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_148_1536: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("59.42622950819673%")
  },
  ImageBackground_148_1537: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_160_0: {
    width: wp("12.691526285807292%"),
    height: hp("6.501806498876686%"),
    top: hp("12.686374018101091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.454231770833339%")
  },
  View_148_1539: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("11.558766182654542%"),
    minHeight: hp("11.558766182654542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.408421917691257%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_148_1540: {
    width: wp("23.973333740234377%"),
    minWidth: wp("23.973333740234377%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4678385416666657%"),
    top: hp("26.63934426229507%")
  },
  Text_148_1540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_153_1526: {
    width: wp("12.201285807291667%"),
    minWidth: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("86.47540983606558%")
  },
  View_153_1527: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333337%")
  },
  Text_153_1527: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_153_1528: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_153_1529: {
    width: wp("12.201285807291667%"),
    minWidth: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("86.47540983606558%")
  },
  View_153_1530: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.60130208333333%")
  },
  Text_153_1530: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_153_1531: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_183_375: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("99.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I183_375_183_2: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I183_375_183_3: {
    flexGrow: 1,
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I183_375_183_4: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_375_183_16: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("3.961748633879779%")
  },
  View_I183_375_183_302: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_I183_375_183_303: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I183_375_183_304: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  ImageBackground_183_442: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    top: hp("12.158469945355192%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
