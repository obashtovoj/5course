unit Unit1;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, Menus, StdCtrls, ComCtrls, ExtCtrls, MMSystem, XPMan;

type
  TForm1 = class(TForm)
    ShC3: TShape;
    ShD3: TShape;
    ShE3: TShape;
    ShF3: TShape;
    ShG3: TShape;
    ShA3: TShape;
    ShB3: TShape;
    ShC4: TShape;
    ShD4: TShape;
    ShE4: TShape;
    ShF4: TShape;
    ShG4: TShape;
    ShA4: TShape;
    ShB4: TShape;
    ShC5: TShape;
    ShDb3: TShape;
    ShEb3: TShape;
    ShGb3: TShape;
    ShAb3: TShape;
    ShH3: TShape;
    ShDb4: TShape;
    ShEb4: TShape;
    ShGb4: TShape;
    ShAb4: TShape;
    ShH4: TShape;
    TrackBar1: TTrackBar;
    ListBox1: TListBox;
    MainMenu1: TMainMenu;
    K2: TMenuItem;
    K4: TMenuItem;
    Timer1: TTimer;
    S1: TMenuItem;
    S2: TMenuItem;
    CheckBox1: TCheckBox;
    Label2: TLabel;
    Label3: TLabel;
    Label4: TLabel;
    Label5: TLabel;
    Label6: TLabel;
    Label7: TLabel;
    Label8: TLabel;
    Label9: TLabel;
    Label10: TLabel;
    Label12: TLabel;
    Label13: TLabel;
    Label14: TLabel;
    Label15: TLabel;
    Label16: TLabel;
    Label17: TLabel;
    Label18: TLabel;
    S5: TMenuItem;
    S6: TMenuItem;
    XPManifest1: TXPManifest;
    Label11: TLabel;
    Label19: TLabel;
    Button1: TButton;
    Timer2: TTimer;
    Button2: TButton;
    procedure FormCreate(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
    procedure ListBox1Click(Sender: TObject);
    procedure TrackBar1Change(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
    procedure FormKeyUp(Sender: TObject; var Key: Word;
      Shift: TShiftState);
    procedure ShC3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShC3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShDb3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShDb3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShD3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShD3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShEb3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShEb3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShE3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShE3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShF3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShF3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShGb3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShGb3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShG3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShG3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShAb3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShAb3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShA3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShA3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShH3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShH3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShB3MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShB3MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShC4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShC4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShDb4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShDb4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShD4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShD4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShEb4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShEb4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShE4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShE4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShF4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShF4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShGb4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShGb4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShG4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShG4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShAb4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShAb4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShA4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShA4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShH4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShH4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShB4MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShB4MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShC5MouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure ShC5MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure FormPaint(Sender: TObject);
    procedure FormDestroy(Sender: TObject);
    procedure S1Click(Sender: TObject);
    procedure S2Click(Sender: TObject);
    procedure K4Click(Sender: TObject);
    procedure CheckBox1MouseUp(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure S5Click(Sender: TObject);
    procedure S6Click(Sender: TObject);
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure Timer2Timer(Sender: TObject);


   
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;
  bm:TBitMap;
  MIDIDevices:TStringList;
  hMidi,t,no,midimsg,n,n2:integer; // no-����, midimsg-�������

  vel:integer=127;
  BelKlavNag:TColor=$00CFCFCF;
  BelKlav:TColor=$00E9E9E9;
  ChorKlavNag:TColor=$001B1B1B;
  ChorKlav:TColor=$00373737;
  skin:string='skins/girl.bmp';

  Instruments:array [0..127] of String=( 'AcousticGrandPano', 'BrightAcousticPiano', 'ElectricGrandPiano','HonkyTonkPiano','ElectricPiano1','ElectricPiano2','Harpsichord',
  'Clavinet','Celesta','Glockenspiel','MusicBox','Vibraphone', 'Marimba','Xylophone', 'TubularBells','Dulcimer','DrawbarOrgan',
  'PercussiveOrgan','RockOrgan','ChurchOrgan','ReedOrgan','Accordion', 'Harmonica', 'TangoAccordion', 'AcousticNylonGuitar', ' AcousticSteelGuitar', 'JazzElectricGuitar', 'CleanElectricGuitar', 'MutedElectricGuitar', 'OverdrivenGuitar', 'DistortionGuitar',
  'GuitarHarmonics',  'AcousticBass', 'FingeredElectricBass', 'PickedElectricBass', 'FretlessBass', 'SlapBass1', 'SlapBass2',
  'SynthBass1', 'SynthBass2', 'Violin', 'Viola', 'Cello', 'Contrabass', 'TremoloStrings', 'PizzicatoStrings', 'OrchestralHarp',
  'Timpani', 'StringEnsemble1', 'StringEnsemble2', 'SynthStrings1', 'SynthStrings2', 'ChoirAahs', 'VoiceOohs', 'SynthVoice',
  'OrchestraHit', 'Trumpet', 'Trombone','Tuba', 'MutedTrumpet', 'FrenchHorn', 'BrassSection', 'SynthBrass1', 'SynthBrass2',
  'SopranoSax', 'AltoSax', 'TenorSax', 'BaritoneSax', 'Oboe', 'EnglishHorn', 'Bassoon', 'Clarinet', 'Piccolo', 'Flute', 'Recorder',
  'PanFlute', 'BlownBottle', 'Shakuhachi', 'Whistle', 'Ocarina', 'SquareLead', 'SawtoothLead', 'CalliopeLead', 'ChiffLead',
  'CharangLead', 'VoiceLead', 'FifthsLead', 'BassandLead', 'NewAgePad', 'WarmPad', 'PolySynthPad', 'ChoirPad', 'BowedPad',
  'MetallicPad', 'HaloPad', 'SweepPad', 'SynthFXRain', 'SynthFXSoundtrack', 'SynthFXCrystal', 'SynthFXAtmosphere', 'SynthFXBrightness',
  'SynthFXGoblins', 'SynthFXEchoes', 'SynthFXSciFi', 'Sitar', 'Banjo', 'Shamisen', 'Koto', 'Kalimba', 'Bagpipe', 'Fiddle', 'Shanai',
  'TinkleBell', 'Agogo', 'SteelDrums', 'Woodblock', 'TaikoDrum', 'MelodicTom', 'SynthDrum', 'ReverseCymbal', 'GuitarFretNoise',
  'BreathNoise', 'Seashore', 'BirdTweet', 'TelephoneRing', 'Helicopter', 'Applause', 'Gunshot');
  //� ���� ������� ������� ��� ����������� ����������� General Midi � �� ������ ����� ������� ��������.

type
  TMidiHeader   = packed record
    Name1       : array[0..3] of AnsiChar;
    Len1        : DWORD;
    frmMidi     : Word;
    NumTrack    : Word;
    PPQN        : Word;
    Name2       : array[0..3] of AnsiChar;
    Len2        : DWORD;

  end;

var
  MidiHeader    : TMidiHeader = (
    Name1       : 'MThd';
    Len1        : $06000000;
    frmMidi     : $0000;
    NumTrack    : $0100;
    PPQN        : $6000;
    Name2       : 'MTrk';
    Len2        : $FFFF0000);
    isWriting     : Boolean;
  F             : TFileStream;
  Tim           : DWORD;
  implementation

{$R *.dfm}
//��������� ����������� �� ������� ���� ���������� �������, �����
//��������� midi-�������.


procedure TimeWrite(T : DWORD);                                                 // ������ ������-������� � ���� �������� ���������� ������
var
  ab : array[0..3] of Byte;
  I  : Integer;
begin
  ab[0] := (T and $7F);                                                         // ������ ���� ��� �����
  ab[1] := (T and $3F80) div $100;
  ab[2] := (T and $1FC000) div $10000;
  ab[3] := (T and $FE00000) div $1000000;                                       // ��������� �������

  for I := 3 downto 1 do                                                        // ������ ���������� �� �������� �����!!!!!
    if ab[I] <> 0 then
    begin
      ab[I] := ab[I] + $80;
      F.Write((ab[I]), 1);
    end;

  F.Write(ab[0], 1);
end;

procedure GetMIDIOutDevices(Devices: TStrings);
var
i, DNum: Integer;
Caps: TMIDIOUTCAPSA;
begin
DNum := MIDIOutGetNumDevs;
for i := 0 to DNum - 1 do
begin
MIDIOutGetDevCaps(i,@Caps, SizeOf(TMIDIOutCapsA));
Devices.Add(string(Caps.szPname));
end;
end;

procedure TForm1.FormCreate(Sender: TObject);
var i,ii: integer;
nit: string;
begin
for ii:=0 to 24 do
begin

end;
DoubleBuffered:=true;
bm:= TBitMap.Create;
bm.LoadFromFile(skin);
form1.Repaint;

midiOutOpen(@hmidi, 0, 0, 0, 0);  // �������� ����-������
//������������ ��������, ���� ��������� ������ � ���������
Form1.KeyPreview:= true;
//form1.Label1.Caption:=floattostr(vel);
//������ ����������� ���������� �� ��������� �����
for i:=0 to 127 do
begin
nit:=(FloatToStr(i)+'.'+Instruments[i]);
ListBox1.Items.add(FloatToStr(i)+'.'+Instruments[i]);
end;
//��������� �� ��������� ������� �� ��������
MIDIDevices := TStringList.Create;
try
GetMIDIOutDevices(MIDIDevices);
finally
MIDIDevices.Free;
end;
// �����, ���� ������� ��� ������� ����������� ��������
Timer1.Enabled := True;
midimsg := $C0+$100*65;  //��������, ���� ������������ ���� ������
midiOutShortMsg (hmidi, midimsg);
midimsg := $90 + ((48) * $100) + ((80) * $10000) + 0;
midiOutShortMsg (hmidi, midimsg);
midimsg := $90 + ((60) * $100) + ((80) * $10000) + 0;
midiOutShortMsg (hmidi, midimsg);
midimsg := $90 + ((67) * $100) + ((80) * $10000) + 0;
midiOutShortMsg (hmidi, midimsg);
midimsg := $90 + ((74) * $100) + ((80) * $10000) + 0;
midiOutShortMsg (hmidi, midimsg);



end;
//³���������  ������
procedure TForm1.Timer1Timer(Sender: TObject);
begin

midimsg := $80 + ((48) * $100) +  0;
midiOutShortMsg (hmidi, midimsg);
midimsg := $80 + ((60) * $100) +  0;
midiOutShortMsg (hmidi, midimsg);
midimsg := $80 + ((67) * $100) +  0;
midiOutShortMsg (hmidi, midimsg);
midimsg := $80 + ((74) * $100) +  0;
midiOutShortMsg (hmidi, midimsg);
midimsg := $C0+$100*00; //��������, ���� ������������ ���� ������
midiOutShortMsg (hmidi, midimsg);
Form1.Timer1.Enabled:=false;

end;

procedure TForm1.ListBox1Click(Sender: TObject);
var ni:integer; //����������� ����� �����������
begin
ni:=ListBox1.ItemIndex;
midimsg := $C0+$100*ni;
midiOutShortMsg (hmidi, midimsg);
 if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.TrackBar1Change(Sender: TObject);
var i:integer;
begin
for i:=0 to 127 do
begin
if TrackBar1.Position=i then
vel:=127-i;

end;
end;
//��������� ���������� �����
procedure TForm1.FormKeyPress(Sender: TObject; var Key: Char);
begin
if key='a' then begin no:=60; ShC3.Brush.Color:=BelKlavNag; end;
if key='w' then begin no:=61; ShDb3.Brush.Color:=ChorKlavNag; end;
if key='s' then begin no:=62; ShD3.Brush.Color:=BelKlavNag;end;
if key='e' then begin no:=63; ShEb3.Brush.Color:=ChorKlavNag;end;
if key='d' then begin no:=64; ShE3.Brush.Color:=BelKlavNag;end;
if key='f' then begin no:=65; ShF3.Brush.Color:=BelKlavNag;end;
if key='t' then begin no:=66; ShGb3.Brush.Color:=ChorKlavNag;end;
if key='g' then begin no:=67; ShG3.Brush.Color:=BelKlavNag;end;
if key='y' then begin no:=68; ShAb3.Brush.Color:=ChorKlavNag;end;
if key='h' then begin no:=69; ShA3.Brush.Color:=BelKlavNag;end;
if key='u' then begin no:=70; ShH3.Brush.Color:=ChorKlavNag;end;
if key='j' then begin no:=71; ShB3.Brush.Color:=BelKlavNag;end;
if key='k' then begin no:=72; ShC4.Brush.Color:=BelKlavNag;end;
if key='o' then begin no:=73; ShDb4.Brush.Color:=ChorKlavNag;end;
if key='l' then begin no:=74; ShD4.Brush.Color:=BelKlavNag;end;
if key='p' then begin no:=75; ShEb4.Brush.Color:=ChorKlavNag;end;
if key='A' then begin no:=72; ShC4.Brush.Color:=BelKlavNag;end;
if key='W' then begin no:=73; ShDb4.Brush.Color:=ChorKlavNag;end;
if key='S' then begin no:=74; ShD4.Brush.Color:=BelKlavNag;end;
if key='E' then begin no:=75; ShEb4.Brush.Color:=ChorKlavNag;end;
if key='D' then begin no:=76; ShE4.Brush.Color:=BelKlavNag;end;
if key='F' then begin no:=77; ShF4.Brush.Color:=BelKlavNag;end;
if key='T' then begin no:=78; ShGb4.Brush.Color:=ChorKlavNag;end;
if key='G' then begin no:=79; ShG4.Brush.Color:=BelKlavNag;end;
if key='Y' then begin no:=80; ShAb4.Brush.Color:=ChorKlavNag;end;
if key='H' then begin no:=81; ShA4.Brush.Color:=BelKlavNag;end;
if key='U' then begin no:=82; ShH4.Brush.Color:=ChorKlavNag;end;
if key='J' then begin no:=83; ShB4.Brush.Color:=BelKlavNag;end;
if key='K' then begin no:=84; ShC5.Brush.Color:=BelKlavNag;end;
if ( ((key='a') or (key='w') or (key='s') or
(key='e') or (key='d') or (key='f') or (key='t') or (key='g') or
(key='y') or (key='h') or (key='u') or (key='j') or (key='k') or (key='o')
or (key='l') or (key='p') or (key='A') or (key='W') or (key='S') or (key='E')
or (key='D') or (key='F') or (key='T') or (key='G') or (key='Y') or (key='H')
or (key='U') or (key='J') or (key='K'))) then
begin

midimsg := $90 + ((no) * $100) + ((vel) * $10000) + 0; // �������� ������
midiOutShortMsg (hmidi, midimsg);
if Timer2.Enabled then                                                      // ���� �������� ������
          begin
            TimeWrite(Tim);
            Tim := 0;
            F.Write(MidiMsg, 3);
          end;
end;
end;
//��������� ������� �����
procedure TForm1.FormKeyUp(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
if key=ord('A') then begin  n:=60;n2:=72;ShC3.Brush.Color:=BelKlav;ShC4.Brush.Color:=BelKlav;end;
if key=ord('W') then begin  n:=61;n2:=73;ShDb3.Brush.Color:=ChorKlav;ShDb4.Brush.Color:=ChorKlav;end;
if key=ord('S') then begin  n:=62;n2:=74;ShD3.Brush.Color:=BelKlav;ShD4.Brush.Color:=BelKlav;end;
if key=ord('E') then begin  n:=63;n2:=75;ShEb3.Brush.Color:=ChorKlav;ShEb4.Brush.Color:=ChorKlav;end;
if key=ord('D') then begin  n:=64;n2:=76;ShE3.Brush.Color:=BelKlav;ShE4.Brush.Color:=BelKlav;end;
if key=ord('F') then begin  n:=65;n2:=77;ShF3.Brush.Color:=BelKlav;ShF4.Brush.Color:=BelKlav;end;
if key=ord('T') then begin  n:=66;n2:=78;ShGb3.Brush.Color:=ChorKlav;ShGb4.Brush.Color:=ChorKlav;end;
if key=ord('G') then begin  n:=67;n2:=79;ShG3.Brush.Color:=BelKlav;ShG4.Brush.Color:=BelKlav;end;
if key=ord('Y') then begin  n:=68;n2:=80;ShAb3.Brush.Color:=ChorKlav;ShAb4.Brush.Color:=ChorKlav;end;
if key=ord('H') then begin  n:=69;n2:=81;ShA3.Brush.Color:=BelKlav;ShA4.Brush.Color:=BelKlav;end;
if key=ord('U') then begin  n:=70;n2:=82;ShH3.Brush.Color:=ChorKlav;ShH4.Brush.Color:=ChorKlav;end;
if key=ord('J') then begin  n:=71;n2:=83;ShB3.Brush.Color:=BelKlav;ShB4.Brush.Color:=BelKlav;end;
if key=ord('K') then begin  n:=72;n2:=84;ShC4.Brush.Color:=BelKlav;ShC5.Brush.Color:=BelKlav;end;
if key=ord('O') then begin  n:=73; ShDb4.Brush.Color:=ChorKlav;end;
if key=ord('L') then begin  n:=74;ShD4.Brush.Color:=BelKlav;end;
if key=ord('P') then begin  n:=75;ShEb4.Brush.Color:=ChorKlav;end;
midimsg := $80 + ((n) * $100) +0 ;
midiOutShortMsg (hmidi, midimsg);
 if Timer2.Enabled then                                                      // ���� �������� ������
        begin
          TimeWrite(Tim);
          Tim := 0;
          F.Write(MidiMsg, 3);
        end;
midimsg := $80 + ((n2) * $100) +0 ;
midiOutShortMsg (hmidi, midimsg);
  if Timer2.Enabled then                                                      // ���� �������� ������
        begin
          TimeWrite(Tim);
          Tim := 0;
          F.Write(MidiMsg, 3);
        end;
end;

procedure TForm1.ShC3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShC3.Brush.Color:=BelKlav;
midiOutShortMsg(hmidi,$3C80);
midiOutShortMsg(hmidi, MidiMSG);
 if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;
   //��������� ���������� ������������� ������  �����
procedure TForm1.ShC3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShC3.Brush.Color:=BelKlavNag;
midimsg:= $3C80;
midiOutShortMsg(hmidi,midimsg);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShDb3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShDb3.Brush.Color:=ChorKlavNag;
midiOutShortMsg (hmidi, $3D90+((vel) * $10000));
 midiOutShortMsg (hmidi,midimsg );
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShDb3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShDb3.Brush.Color:=ChorKlav;
midiOutShortMsg(hmidi,$3D80);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShD3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShD3.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $3E90+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShD3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShD3.Brush.Color:=BelKlav;  midiOutShortMsg(hmidi,$3E80);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShEb3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShEb3.Brush.Color:=ChorKlavNag;
midiOutShortMsg (hmidi, $3F90+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShEb3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShEb3.Brush.Color:=ChorKlav;
midiOutShortMsg(hmidi,$3F80);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShE3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShE3.Brush.Color:=BelKlavNag;
 midiOutShortMsg (hmidi, $4090+((vel) * $10000));
 if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShE3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShE3.Brush.Color:=BelKlav;
midiOutShortMsg(hmidi,$4080);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShF3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShF3.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $4190+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShF3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShF3.Brush.Color:=BelKlav;
midiOutShortMsg(hmidi,$4180);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShGb3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShGb3.Brush.Color:=ChorKlavNag;
 midiOutShortMsg (hmidi, $4290+((vel) * $10000));
 if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShGb3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShGb3.Brush.Color:=ChorKlav;
midiOutShortMsg(hmidi,$4280);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShG3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShG3.Brush.Color:=BelKlavNag;
 midiOutShortMsg (hmidi, $4390+((vel) * $10000));
 if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShG3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShG3.Brush.Color:=BelKlav;  midiOutShortMsg(hmidi,$4380);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShAb3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShAb3.Brush.Color:=ChorKlavNag;
midiOutShortMsg (hmidi, $4490+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShAb3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShAb3.Brush.Color:=ChorKlav;  midiOutShortMsg(hmidi,$4480);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShA3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShA3.Brush.Color:=BelKlavNag;
 midiOutShortMsg (hmidi, $4590+((vel) * $10000));
 if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShA3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShA3.Brush.Color:=BelKlav;
 midiOutShortMsg(hmidi,$4580);
 if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShH3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShH3.Brush.Color:=ChorKlavNag;
midiOutShortMsg (hmidi, $4690+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShH3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShH3.Brush.Color:=ChorKlav;  midiOutShortMsg(hmidi,$4680);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShB3MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShB3.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $4790+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShB3MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShB3.Brush.Color:=BelKlav;
midiOutShortMsg(hmidi,$4780);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShC4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShC4.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $4890+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShC4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShC4.Brush.Color:=BelKlav;  midiOutShortMsg(hmidi,$4880);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShDb4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShDb4.Brush.Color:=ChorKlavNag;
midiOutShortMsg (hmidi, $4990+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShDb4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShDb4.Brush.Color:=ChorKlav;
midiOutShortMsg(hmidi,$4980);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShD4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShD4.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $4A90+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShD4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShD4.Brush.Color:=BelKlav;
midiOutShortMsg(hmidi,$4A80);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShEb4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShEb4.Brush.Color:=ChorKlavNag;
midiOutShortMsg (hmidi, $4B90+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShEb4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShEb4.Brush.Color:=ChorKlav;
 midiOutShortMsg(hmidi,$4B80);
 if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShE4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShE4.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $4C90+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShE4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShE4.Brush.Color:=BelKlav;
midiOutShortMsg(hmidi,$4C80);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShF4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShF4.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $4D90+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShF4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShF4.Brush.Color:=BelKlav;  midiOutShortMsg(hmidi,$4D80);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShGb4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShGb4.Brush.Color:=ChorKlavNag;
 midiOutShortMsg (hmidi, $4E90+((vel) * $10000));
 if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShGb4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShGb4.Brush.Color:=ChorKlav;
midiOutShortMsg(hmidi,$4E80);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShG4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShG4.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $4F90+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShG4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShG4.Brush.Color:=BelKlav;
midiOutShortMsg(hmidi,$4F80);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShAb4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShAb4.Brush.Color:=ChorKlavNag;
midiOutShortMsg (hmidi, $5090+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShAb4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShAb4.Brush.Color:=ChorKlav;
midiOutShortMsg(hmidi,$5080);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShA4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShA4.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $5190+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShA4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShA4.Brush.Color:=BelKlav;
midiOutShortMsg(hmidi,$5180);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShH4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShH4.Brush.Color:=ChorKlavNag;
 midiOutShortMsg (hmidi, $5290+((vel) * $10000));
 if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShH4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShH4.Brush.Color:=ChorKlav;
midiOutShortMsg(hmidi,$5280);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShB4MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShB4.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $5390+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShB4MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShB4.Brush.Color:=BelKlav;
midiOutShortMsg(hmidi,$5380);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShC5MouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShC5.Brush.Color:=BelKlavNag;
midiOutShortMsg (hmidi, $5490+((vel) * $10000));
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;

procedure TForm1.ShC5MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
ShC5.Brush.Color:=BelKlav;
midiOutShortMsg(hmidi,$5480);
if Timer2.Enabled then                                                      // ���� �������� ������
    begin
     TimeWrite(Tim);
      Tim := 0;
      F.Write(MidiMsg, 3);
    end;
end;
  //��������� ������������ skin
procedure TForm1.FormPaint(Sender: TObject);
var x, y: integer;
begin
for x := 0 to (Form1.ClientWidth div bm.Width) do
for y := 0 to (Form1.ClientHeight div bm.Height) do
Form1.Canvas.Draw(x * bm.Width, y * bm.Height, bm);
end;
 //��������� ���� skin
procedure TForm1.FormDestroy(Sender: TObject);
begin
bm.Destroy;
end;

procedure TForm1.S1Click(Sender: TObject);
begin
skin:='skins/shrek.bmp';
bm.LoadFromFile(skin);
form1.Repaint;
s1.GroupIndex:=1;
s1.RadioItem:=true;
s1.Checked:=true;
end;

procedure TForm1.S2Click(Sender: TObject);
begin
skin:='skins/spider.bmp';
bm.LoadFromFile(skin);
form1.Repaint;
s2.GroupIndex:=1;
s2.RadioItem:=true;
s2.Checked:=true;
end;



procedure TForm1.K4Click(Sender: TObject);
begin
Close;
end;


procedure TForm1.CheckBox1MouseUp(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
Label2.Visible:=CheckBox1.Checked;
Label3.Visible:=CheckBox1.Checked;
Label4.Visible:=CheckBox1.Checked;
Label5.Visible:=CheckBox1.Checked;
Label6.Visible:=CheckBox1.Checked;
Label7.Visible:=CheckBox1.Checked;
Label8.Visible:=CheckBox1.Checked;
Label9.Visible:=CheckBox1.Checked;
Label10.Visible:=CheckBox1.Checked;
Label12.Visible:=CheckBox1.Checked;
Label13.Visible:=CheckBox1.Checked;
Label14.Visible:=CheckBox1.Checked;
Label15.Visible:=CheckBox1.Checked;
Label16.Visible:=CheckBox1.Checked;
Label17.Visible:=CheckBox1.Checked;
Label18.Visible:=CheckBox1.Checked;
Label11.Visible:=CheckBox1.Checked;
label19.Visible:=CheckBox1.Checked;
end;

procedure TForm1.S5Click(Sender: TObject);
begin
skin:='skins/coffe.bmp';
bm.LoadFromFile(skin);
form1.Repaint;
s5.GroupIndex:=1;
s5.RadioItem:=true;
s5.Checked:=true;
end;

procedure TForm1.S6Click(Sender: TObject);
begin
skin:='skins/girl.bmp';
bm.LoadFromFile(skin);
form1.Repaint;
s6.GroupIndex:=1;
s6.RadioItem:=true;
s6.Checked:=true;
end;

procedure TForm1.Button1Click(Sender: TObject);
var
  mb : Byte;
begin
  
    F := TFileStream.Create('new.mid', fmCreate);

    // ������ "�����" Midi-�����
    F.Write(MidiHeader, SizeOf(MidiHeader));

    mb := 0;
    F.Write(mb, 1);
    mb := $C0;                                                                  // ���������
    F.Write(mb, 1);
    mb := $01;                                                                  // ����������� � 1
    F.Write(mb, 1);
    Tim := 0;
    Timer2.enabled := True;


end;

procedure TForm1.Button2Click(Sender: TObject);
var
  mb : Byte;
begin
    mb := $FF;                                                                  // $FF2F00 - ����� �����
    F.Write(mb, 1);
    mb := $2F;
    F.Write(mb, 1);
    mb := $00;
    F.Write(mb, 1);
    F.Free;
    Timer2.Enabled := False;

end;

procedure TForm1.Timer2Timer(Sender: TObject);
begin
inc(Tim, 3);
end;



end.
