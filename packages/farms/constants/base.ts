import { baseTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { FarmConfigV3 } from '../src'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'

const v3TopFixedFarms: FarmConfigV3[] = [
  {
    pid: 10,
    lpAddress: '0x72AB388E2E2F6FaceF59E3C3FA2C4E29011c2D38',
    token0: baseTokens.weth,
    token1: baseTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 9,
    lpAddress: '0xF6C0A374a483101e04EF5F7Ac9Bd15d9142BAC95',
    token0: baseTokens.weth,
    token1: baseTokens.usdbc,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 5,
    lpAddress: '0xB775272E537cc670C65DC852908aD47015244EaF',
    token0: baseTokens.weth,
    token1: baseTokens.usdc,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 1,
    lpAddress: '0xe58b73fF901325b8b2056B29712C50237242F520',
    token0: baseTokens.weth,
    token1: baseTokens.usdbc,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 6,
    lpAddress: '0x29Ed55B18Af0Add137952CB3E29FB77B32fCE426',
    token0: baseTokens.usdc,
    token1: baseTokens.usdbc,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 12,
    lpAddress: '0x257FCbAE4Ac6B26A02E4FC5e1a11e4174B5ce395',
    token0: baseTokens.cbETH,
    token1: baseTokens.weth,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 2,
    lpAddress: '0xc0efC182479319ff258EcA420e2647cD82D3790c',
    token0: baseTokens.cbETH,
    token1: baseTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
]

export const farmsV3 = defineFarmV3Configs([
  ...v3TopFixedFarms,
  {
    pid: 26,
    lpAddress: '0x20CB8f872ae894F7c9e32e621C186e5AFCe82Fd0',
    token0: baseTokens.weth,
    token1: baseTokens.aero,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 25,
    lpAddress: '0x54D281c7cc029a9Dd71F9ACb7487dd95B1EecF5a',
    token0: baseTokens.weth,
    token1: baseTokens.degen,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 24,
    lpAddress: '0x526d54cD4FAc2e6B2ddCb6bC98b9292603061f85',
    token0: baseTokens.weth,
    token1: baseTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 23,
    lpAddress: '0x765bf105ed38D2Ee7801210B4Bb2B8b7D9B3A17f',
    token0: baseTokens.weth,
    token1: baseTokens.brett,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 22,
    lpAddress: '0xbee435c7Ff6Cb814124281C4C2532476A094Ac87',
    token0: baseTokens.weth,
    token1: baseTokens.zro,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 15,
    lpAddress: '0x5b9FEB72588D2800892a00d2abB4ca9071df846e',
    token0: baseTokens.weth,
    token1: baseTokens.usdPlus,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 16,
    lpAddress: '0xa4846201E94D2a5399774926f760A36D52Ac22BF',
    token0: baseTokens.usdPlus,
    token1: baseTokens.wstETH,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 17,
    lpAddress: '0x40C91EBd1FA940A363989aC80a31B3a988dD649B',
    token0: baseTokens.cbETH,
    token1: baseTokens.usdPlus,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 18,
    lpAddress: '0x98Ee8cd99370Ab19F18Fb9033337995076867ee9',
    token0: baseTokens.brett,
    token1: baseTokens.usdPlus,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 19,
    lpAddress: '0xdd5AC923f03a97FF9F0cfbFa0F5E155E46c3727d',
    token0: baseTokens.degen,
    token1: baseTokens.usdPlus,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 20,
    lpAddress: '0x62996340a9bFEeE2A72bfAE8F21b8c0A5E692261',
    token0: baseTokens.aero,
    token1: baseTokens.usdPlus,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 21,
    lpAddress: '0xcC7BfD85395042EE0cACe335E40b549b3d08Eb78',
    token0: baseTokens.weth,
    token1: baseTokens.ovn,
    feeAmount: FeeAmount.HIGH,
  },
  {
    pid: 14,
    lpAddress: '0xBd59a718E60bd868123C6E949c9fd97185EFbDB7',
    token0: baseTokens.weth,
    token1: baseTokens.wstETH,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 13,
    lpAddress: '0x03C33a2fC0D444a5B61E573f9e1A285357a694fc',
    token0: baseTokens.cake,
    token1: baseTokens.weth,
    feeAmount: FeeAmount.HIGH,
  },

  {
    pid: 11,
    lpAddress: '0x25DEe2707979055245A18AE6a415bb7b1435Eb06',
    token0: baseTokens.usdbc,
    token1: baseTokens.axlusdc,
    feeAmount: FeeAmount.LOWEST,
  },

  {
    pid: 8,
    lpAddress: '0x0D486753B99b1e0548d3505D8B797c673b58Cad3',
    token0: baseTokens.tbtc,
    token1: baseTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 7,
    lpAddress: '0x345825A980BD94e1480bC4f20FE4e3DAE2F23Dd3',
    token0: baseTokens.dai,
    token1: baseTokens.usdc,
    feeAmount: FeeAmount.LOWEST,
  },

  {
    pid: 4,
    lpAddress: '0x9BFa331679b307Cf358438F45f6413a205FD3EBf',
    token0: baseTokens.weth,
    token1: baseTokens.dai,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 3,
    lpAddress: '0xe4eFf19c7AcE186ba39fD3eD639B2D34171f7efF',
    token0: baseTokens.dai,
    token1: baseTokens.usdbc,
    feeAmount: FeeAmount.LOWEST,
  },
])
