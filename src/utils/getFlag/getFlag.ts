import mexIconFlag from "../../assets/flag-mex.png";
import algIconFlag from "../../assets/flag-alg.png";
import argIconFlag from "../../assets/flag-arg.png";
import ausIconFlag from "../../assets/flag-aus.png";
import autIconFlag from "../../assets/flag-aut.png";
import belIconFlag from "../../assets/flag-bel.png";
import bihIconFlag from "../../assets/flag-bih.png";
import braIconFlag from "../../assets/flag-bra.png";
import canIconFlag from "../../assets/flag-can.png";
import ccIconFlag from "../../assets/flag-cc.png";
import civIconFlag from "../../assets/flag-civ.png";
import codIconFlag from "../../assets/flag-cod.png";
import colIconFlag from "../../assets/flag-col.png";
import cpvIconFlag from "../../assets/flag-cpv.png";
import croIconFlag from "../../assets/flag-cro.png";
import cuwIconFlag from "../../assets/flag-cuw.png";
import czeIconFlag from "../../assets/flag-cze.png";
import ecuIconFlag from "../../assets/flag-ecu.png";
import egyIconFlag from "../../assets/flag-egy.png";
import engIconFlag from "../../assets/flag-eng.png";
import espIconFlag from "../../assets/flag-esp.png";
import fraIconFlag from "../../assets/flag-fra.png";
import gerIconFlag from "../../assets/flag-ger.png";
import ghaIconFlag from "../../assets/flag-gha.png";
import haiIconFlag from "../../assets/flag-hai.png";
import irnIconFlag from "../../assets/flag-irn.png";
import irqIconFlag from "../../assets/flag-irq.png";
import jorIconFlag from "../../assets/flag-jor.png";
import jpnIconFlag from "../../assets/flag-jpn.png";
import korIconFlag from "../../assets/flag-kor.png";
import ksaIconFlag from "../../assets/flag-ksa.png";
import marIconFlag from "../../assets/flag-mar.png";
import nedIconFlag from "../../assets/flag-ned.png";
import norIconFlag from "../../assets/flag-nor.png";
import nzlIconFlag from "../../assets/flag-nzl.png";
import panIconFlag from "../../assets/flag-pan.png";
import parIconFlag from "../../assets/flag-par.png";
import porIconFlag from "../../assets/flag-por.png";
import qatIconFlag from "../../assets/flag-qat.png";
import rsaIconFlag from "../../assets/flag-rsa.png";
import scoIconFlag from "../../assets/flag-sco.png";
import senIconFlag from "../../assets/flag-sen.png";
import suiIconFlag from "../../assets/flag-sui.png";
import sweIconFlag from "../../assets/flag-swe.png";
import tunIconFlag from "../../assets/flag-tun.png";
import turIconFlag from "../../assets/flag-tur.png";
import uruIconFlag from "../../assets/flag-uru.png";
import usaIconFlag from "../../assets/flag-usa.png";
import yzbIconFlag from "../../assets/flag-yzb.png";

const countryImages: Record<string, string> = {
  ALG: algIconFlag,
  ARG: argIconFlag,
  AUS: ausIconFlag,
  AUT: autIconFlag,
  BEL: belIconFlag,
  BIH: bihIconFlag,
  BRA: braIconFlag,
  CAN: canIconFlag,
  CC: ccIconFlag,
  CIV: civIconFlag,
  COD: codIconFlag,
  COL: colIconFlag,
  CPV: cpvIconFlag,
  CRO: croIconFlag,
  CUW: cuwIconFlag,
  CZE: czeIconFlag,
  ECU: ecuIconFlag,
  EGY: egyIconFlag,
  ENG: engIconFlag,
  ESP: espIconFlag,
  FRA: fraIconFlag,
  GER: gerIconFlag,
  GHA: ghaIconFlag,
  HAI: haiIconFlag,
  IRN: irnIconFlag,
  IRQ: irqIconFlag,
  JOR: jorIconFlag,
  JPN: jpnIconFlag,
  KOR: korIconFlag,
  KSA: ksaIconFlag,
  MAR: marIconFlag,
  MEX: mexIconFlag,
  NED: nedIconFlag,
  NOR: norIconFlag,
  NZL: nzlIconFlag,
  PAN: panIconFlag,
  PAR: parIconFlag,
  POR: porIconFlag,
  QAT: qatIconFlag,
  RSA: rsaIconFlag,
  SCO: scoIconFlag,
  SEN: senIconFlag,
  SUI: suiIconFlag,
  SWE: sweIconFlag,
  TUN: tunIconFlag,
  TUR: turIconFlag,
  URU: uruIconFlag,
  USA: usaIconFlag,
  UZB: yzbIconFlag,
};

export const getFlagImage = (code: string) => {
  return countryImages[code];
};
